import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'

function Test() {
  const parallax = useParallax({
    speed: 10,
  })
  return (
    <>
      <div className="flex items-center justify-center mt-60" ref={parallax.ref}>
        <div className="rounded-full bg-[#66d9ef] min-w-[360px] min-h-[360px]">
          <Test2 />
        </div>
      </div>
    </>
  )
}

export function Test2() {
  const parallex = useParallax({
    speed: 200,
  })
  return (
    <div
      className="rounded-full bg-[#a72822] min-w-[360px] min-h-[360px] translate-y-3.5"
      ref={parallex.ref}
    ></div>
  )
}
export default Test
