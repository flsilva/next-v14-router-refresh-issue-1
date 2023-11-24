export default function BugDescription() {
  return (
    <div>
      <p className="mt-4">
        This bug reproduction is using{" "}
        <span className="font-mono font-semibold">
          Next.js v14.0.4-canary.14
        </span>
      </p>
      <p className="mt-4">
        <span className="text-2xl">Description</span>
        <br />
        <br />
        Calling{" "}
        <span className="font-mono font-semibold">router.refresh()</span> from
        Intercepting Routes breaks the{" "}
        <span className="font-mono font-semibold">{"<Link>"}</span> component.
      </p>
      <p className="mt-8">
        <span className="text-2xl">This app has 2 routes and 3 pages</span>
        <br />
        <br />
        1. Route <span className="font-mono font-semibold">/</span> renders the
        file at{" "}
        <span className="font-mono font-semibold">src/app/page.tsx</span>.
        <br />
        <br />
        2. Route <span className="font-mono font-semibold">/foo</span> renders
        the file at{" "}
        <span className="font-mono font-semibold">
          /src/app/@intercept/(.)foo/page.tsx
        </span>{" "}
        when you navigate to it using the{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to /foo
        </span>{" "}
        <span className="font-mono font-semibold">{"<Link>"}</span> below, and
        it renders the file at{" "}
        <span className="font-mono font-semibold">/src/app/foo/page.tsx</span>{" "}
        if you refresh the browser while visiting it.
      </p>
      <p className="mt-8">
        <span className="text-2xl">Steps to reproduce</span>
        <br />
        <br />
        1. Make sure you&apos;re at the root route{" "}
        <span className="font-mono font-semibold">/</span>.
        <br />
        <br />
        2. Click{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to /foo
        </span>{" "}
        below.
        <br />
        <br />
        3. Click{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Click to trigger router.refresh()
        </span>{" "}
        inside the "@intercept slot content" box that should be rendering the
        file{" "}
        <span className="font-mono font-semibold">
          /src/app/@intercept/(.)foo/page.tsx
        </span>
        .
        <br />
        <br />
        4. Click{" "}
        <span className="py-[1px] px-2 border-solid border-2 border-sky-600 text-sky-600">
          Nav to Landing
        </span>{" "}
        below.
        <br />
        <br />
      </p>
      <p className="mt-8">
        <span className="text-2xl">What&apos;s expected to happen</span>
        <br />
        <br />
        We should navigate to the root route.
      </p>
      <p className="mt-8">
        <span className="text-2xl">What happens</span>
        <br />
        <br />
        Nothing happens, the{" "}
        <span className="font-mono font-semibold">{"<Link>"}</span> component
        stops working after{" "}
        <span className="font-mono font-semibold">router.refresh()</span> is
        called from an Intercepting Route.
        <br />
        <br />
        If you refresh the browser while visiting the Intercepting Route{" "}
        <span className="font-mono font-semibold">/foo</span>, which renders the
        file at{" "}
        <span className="font-mono font-semibold">/src/app/foo/page.tsx</span>{" "}
        instead, the problem doesn't happen.
      </p>
    </div>
  );
}
