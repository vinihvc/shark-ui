import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, render } from "@testing-library/react";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

afterEach(cleanup);

describe("LinkOverlay", () => {
  it("marks the overlay and includes stretch classes", () => {
    const { getByRole } = render(
      <LinkBox>
        <LinkOverlay href="/post">Title</LinkOverlay>
      </LinkBox>
    );
    const overlay = getByRole("link", { name: "Title" });

    assert.equal(overlay.getAttribute("data-slot"), "link-overlay");
    assert.equal(overlay.getAttribute("href"), "/post");
    assert.ok(overlay.className.includes("static"));
    assert.ok(overlay.className.includes("before:absolute"));
    assert.ok(overlay.className.includes("before:inset-0"));
    assert.ok(overlay.className.includes("before:z-0"));
  });

  it("raises inner links with the containing-block selector", () => {
    const { container, getByRole } = render(
      <LinkBox>
        <LinkOverlay href="/post">Title</LinkOverlay>
        <a href="/author">Author</a>
      </LinkBox>
    );
    const box = container.querySelector('[data-slot="link-box"]');
    const author = getByRole("link", { name: "Author" });

    assert.ok(box);
    assert.ok(box.className.includes("relative"));
    assert.ok(
      box.className.includes(
        "[&_a[href]:not([data-slot=link-overlay])]:relative"
      )
    );
    assert.ok(
      box.className.includes("[&_a[href]:not([data-slot=link-overlay])]:z-1")
    );
    assert.notEqual(author.getAttribute("data-slot"), "link-overlay");
  });

  it("forwards the overlay slot and stretch classes to an asChild link", () => {
    const { getByRole } = render(
      <LinkBox>
        <LinkOverlay asChild>
          <a href="/custom">Custom</a>
        </LinkOverlay>
      </LinkBox>
    );
    const overlay = getByRole("link", { name: "Custom" });

    assert.equal(overlay.getAttribute("data-slot"), "link-overlay");
    assert.ok(overlay.className.includes("static"));
    assert.ok(overlay.className.includes("before:absolute"));
  });
});
