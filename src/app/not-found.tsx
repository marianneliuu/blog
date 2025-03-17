"use client";

import { Bodies, Body, Engine, Mouse, MouseConstraint, Render, Runner, World } from "matter-js";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NotFound() {
  const sceneRef = useRef(null);
  const [engine] = useState(Engine.create());

  useEffect(() => {
    const render = Render.create({
      element: !!sceneRef?.current ? sceneRef.current : undefined,
      engine,
      options: {
        width: 813,
        height: 438,
        wireframes: false,
        background:
          "url('https://static.vecteezy.com/system/resources/previews/020/168/674/large_2x/unfurnished-apartment-with-large-windows-and-houseplants-flat-color-illustration-renting-real-estate-house-renovation-fully-editable-2d-simple-cartoon-interior-with-pink-walls-on-background-vector.jpg') no-repeat center center / cover",
      },
    });

    const world = engine.world;

    // Boundaries
    const boundaries = [
      Bodies.rectangle(406.5, 0, 813, 10, { isStatic: true, render: { fillStyle: "grey" } }), // Top
      Bodies.rectangle(406.5, 438, 813, 10, { isStatic: true, render: { fillStyle: "grey" } }), // Bottom
      Bodies.rectangle(0, 219, 10, 438, { isStatic: true, render: { fillStyle: "grey" } }), // Left
      Bodies.rectangle(813, 219, 10, 438, { isStatic: true, render: { fillStyle: "grey" } }), // Right
    ];

    boundaries.forEach((boundary) => World.add(world, boundary));

    // Platformer-style objects
    const platforms = [
      Bodies.rectangle(203, 329, 200, 10, { isStatic: true, render: { fillStyle: "grey" } }),
      Bodies.rectangle(609, 219, 200, 10, { isStatic: true, render: { fillStyle: "grey" }, angle: -Math.PI * 0.2 }),
      Bodies.rectangle(203, 110, 300, 10, { isStatic: true, render: { fillStyle: "grey" } }),
    ];
    platforms.forEach((platform) => World.add(world, platform));

    const ball = Bodies.circle(203, 400, 10, { restitution: 0.8, render: { fillStyle: "white" } });
    World.add(world, ball);

    const character = Bodies.rectangle(400, 300, 60, 60, {
      render: {
        sprite: {
          texture: "https://media.tenor.com/kQjsTRbRQoYAAAAi/quby.gif",
          xScale: 0.3,
          yScale: 0.3,
        },
      },
    });
    World.add(world, character);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    document.addEventListener("keydown", (event) => {
      const { x, y } = character.velocity;
      switch (event.key) {
        case "w":
          Body.setVelocity(character, { x, y: -5 });
          break;
        case "a":
          Body.setVelocity(character, { x: -5, y });
          break;
        case "s":
          Body.setVelocity(character, { x, y: 5 });
          break;
        case "d":
          Body.setVelocity(character, { x: 5, y });
          break;
        case " ":
          Body.setVelocity(character, { x, y: -10 });
          break;
        default:
          break;
      }
    });

    World.add(world, mouseConstraint);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [engine]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-row justify-center items-center mb-4">
        <Image
          className="w-5 h-5 scale-x-[-1]"
          src="https://media.tenor.com/kQjsTRbRQoYAAAAi/quby.gif"
          width={240}
          height={240}
          alt="dance!"
        />
        <h1 className="text-lg font-extralight">I couldn&apos;t find your page, but you found my home!</h1>
        <Image
          className="w-5 h-5 scale-x-[-1]"
          src="https://media.tenor.com/kQjsTRbRQoYAAAAi/quby.gif"
          width={240}
          height={240}
          alt="dance!"
        />
      </div>
      <div ref={sceneRef} className="border border-gray-300" />
    </div>
  );
}
