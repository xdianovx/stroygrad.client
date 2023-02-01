useEffect(() => {
  burger.current = gsap
    .timeline({
      defaults: { ease: "powe1.out", duration: 0.2 },
      paused: true,
    })
    .to(bottomRef.current, {
      width: 50,
    })
    .to(bottomRef.current, {
      y: -3,
    })
    .to(
      topRef.current,
      {
        y: 3,
      },
      "-=.2"
    )
    .to(bottomRef.current, {
      rotation: 90,
    })
    .to(
      topRef.current,
      {
        rotation: 90,
      },
      "-=.2"
    )
    .to(bottomRef.current, {
      x: -4,
    })
    .to(
      topRef.current,
      {
        x: 4,
      },
      "-=.2"
    );
}, []);
