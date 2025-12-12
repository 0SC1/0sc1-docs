import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"

const PostCard = ({
  post,
  isDark = false,
  isOpen = false,
  language = 'es',
  copiedSlug = '',
  triggerSlug = '',
  preOpenSlug = '',
  skipOpenSlideSlug = '',
  onToggle,
  onShare,
  children,
  t,
}) => {
  const rowRef = useRef(null)
  const iconRef = useRef(null)
  const [sliding, setSliding] = useState(false)
  const [offset, setOffset] = useState(0) // px
  const [fading, setFading] = useState(false)
  const mountedRef = useRef(false)
  const animatingRef = useRef(false)

  const SLIDE_MS = 280
  const OPEN_FADE_MS = 100
  const CLOSE_FADE_MS = 100

  const computeTravel = () => {
    const row = rowRef.current
    const ico = iconRef.current
    if (!row || !ico) return null
    const r = row.getBoundingClientRect()
    const c = ico.getBoundingClientRect()
    // Deja un padding lateral similar a ProjectCards (~32px)
    return Math.max(0, r.width - c.width - 32)
  }

  // Pre-open: Blog triggers this while the card is still closed; slide icon +travel -> 0 and fade closed title/tags
  useEffect(() => {
    if (!preOpenSlug) return
    if (preOpenSlug !== post.slug) return
    if (isOpen) return
    const t = computeTravel()
    if (t == null) return
    try {
      setFading(true)
      setSliding(false)
      setOffset(t)
      requestAnimationFrame(() => {
        const node = iconRef.current
        if (node) { void node.offsetWidth }
        setSliding(true)
        setOffset(0)
        setTimeout(() => {
          setSliding(false)
        }, SLIDE_MS)
      })
    } catch (_) {
      setSliding(false)
      setOffset(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preOpenSlug, isOpen])

  useEffect(() => {
    // Evitar animación en el primer render: posicionar correctamente
    if (!mountedRef.current) {
      mountedRef.current = true
      const t = computeTravel()
      if (t != null) {
        setSliding(false)
        setOffset(isOpen ? 0 : t)
      }
      return
    }
    // Si hay una animación manual en curso, no tocar
    if (animatingRef.current) return
    // Ajustar posición visual según estado abierto/cerrado
    const t = computeTravel()
    if (t == null) return
    if (isOpen) {
      setSliding(false)
      setOffset(0)
    } else {
      setSliding(false)
      setOffset(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])
  // Cuando el post ya está abierto, restaurar opacidad del título/tags cerrados
  useEffect(() => {
    if (isOpen) setFading(false)
  }, [isOpen])
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle?.(post.slug)
    }
  }

  const handleClick = () => {
    if (isOpen) {
      // Cerrar: desplazar icono de izquierda -> derecha (0 -> +travel) y luego cerrar
      const t = computeTravel()
      if (t == null) { onToggle?.(post.slug); return }
      animatingRef.current = true
      setSliding(false)
      setOffset(0)
      requestAnimationFrame(() => {
        const node = iconRef.current
        if (node) { void node.offsetWidth }
        setSliding(true)
        setOffset(t)
        setTimeout(() => {
          setSliding(false)
          animatingRef.current = false
          onToggle?.(post.slug)
        }, SLIDE_MS)
      })
      return
    }
    // Apertura: delegar en Blog (autoscroll -> preOpen slide -> open)
    onToggle?.(post.slug)
  }

  return (
    <div id={`card-${post.slug}`} className="relative">
      <div className={`rounded-2xl overflow-hidden transition-colors ${isDark ? 'bg-primary' : 'bg-secondary'}`}>
        {/* Header / Miniatura */}
        <div
          ref={rowRef}
          className="w-full h-32 px-5 flex gap-6 items-center cursor-pointer"
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {/* Icono único a la izquierda; se desplaza con transform */}
          <div
            ref={iconRef}
            className="h-32 w-32 rounded-md shrink-0 overflow-hidden flex items-center justify-center"
            style={{ transform: `translateX(${offset}px)`, transition: sliding ? `transform ${SLIDE_MS}ms ease-out` : 'none' }}
          >
            {post.icon ? (
              <Icon icon={post.icon} className={`text-7xl md:text-9xl ${post.icon?.startsWith('custom:')
                ? (isDark ? 'filter invert-[12%]' : 'filter invert-[88%]')
                : (isDark ? 'text-cloud' : 'text-primary')
                }`} />
            ) : (
              <span className="text-xs font-code opacity-70">{post.tags?.[0] || 'N/A'}</span>
            )}
          </div>

          {/* Títulos / Metadatos */}
          <div className={`flex-1 ${isOpen ? 'items-start text-left' : 'items-center text-center'} flex flex-col min-w-0`}>
            {!isOpen ? (
              <div>
                <h3 className={`font-code text-5xl leading-tight truncate transition-opacity duration-200 ${!fading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {post.title}
                </h3>
                <p className={`font-code text-sm mt-1 transition-opacity duration-200 ${!fading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {post.tags?.length ? `${post.tags.join(', ')}` : ''}
                </p>
              </div>
            ) : (
              <div className={`w-full transition-opacity duration-150 ${sliding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="font-code text-2xl">{post.title}</h3>
                {post.subtitle && (
                  <p className="font-code text-lg opacity-80">{post.subtitle}</p>
                )}
                {post.excerpt && (
                  <p className="font-code text-base line-clamp-2">{post.excerpt}</p>
                )}
                <p className="font-code text-sm mt-1">
                  {post._dateText || ''}
                  {post.tags?.length ? ` · ${post.tags.join(', ')}` : ''}
                </p>
              </div>
            )}
          </div>

          {/* Acciones a la derecha: compartir */}
          {isOpen ? (
            <div className={`ml-4 shrink-0 flex items-center gap-2 transition-opacity duration-100 ${sliding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="relative group">
                <button
                  type="button"
                  aria-label={ t?.md?.postLink?.share || 'Compartir enlace'}
                  className={`transition-colors flex items-center justify-center text-4xl md:text-5xl ${isDark ? 'text-cloud' : 'text-primary'}`}
                  onClick={(e) => { e.stopPropagation(); onShare?.(post.slug, post.title) }}
                >
                  <Icon icon="tabler:link" />
                </button>
                <span
                  className={`absolute top-2 right-14 rounded text-lg font-code whitespace-nowrap pointer-events-none transition-opacity duration-200 ${copiedSlug === post.slug
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                    } ${isDark ? 'text-cloud' : 'text-primary'}`}
                >
                  {copiedSlug === post.slug
                    ? (t?.md?.postLink?.copied || 'Copiado')
                    : (t?.md?.postLink?.share || 'Compartir')}
                </span>
              </div>
            </div>
          ) : (
            <div className="h-32 w-32 shrink-0" aria-hidden></div>
          )}
        </div>

        {/* Contenido expandido */}
        {isOpen && (
          <div id={`post-${post.slug}`} className="min-w-0">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    excerpt: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
    _dateText: PropTypes.string,
  }).isRequired,
  isDark: PropTypes.bool,
  isOpen: PropTypes.bool,
  language: PropTypes.string,
  copiedSlug: PropTypes.string,
  triggerSlug: PropTypes.string,
  preOpenSlug: PropTypes.string,
  skipOpenSlideSlug: PropTypes.string,
  onToggle: PropTypes.func,
  onShare: PropTypes.func,
  children: PropTypes.node,
}

export default PostCard
