import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Utterances from "@/components/features/blog/Utterances";

describe("Utterances 댓글 컴포넌트", () => {
  let appendChildSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    cleanup();
    vi.restoreAllMocks();
    appendChildSpy = vi.spyOn(HTMLDivElement.prototype, "appendChild");
  });

  it("컴포넌트가 정상적으로 렌더링된다", () => {
    render(<Utterances />);
    expect(screen.getByText("댓글")).toBeInTheDocument();
  });

  it("utterances 스크립트가 올바른 속성으로 삽입된다", () => {
    render(<Utterances />);

    const scriptCall = appendChildSpy.mock.calls.find(
      ([node]: [Node]) =>
        node instanceof HTMLScriptElement &&
        node.src.includes("utteranc.es/client.js"),
    );

    expect(scriptCall).toBeDefined();
    const script = scriptCall![0] as HTMLScriptElement;

    expect(script.getAttribute("repo")).toBe(
      "alstjd0051/alstjd0051.github.io",
    );
    expect(script.getAttribute("issue-term")).toBe("pathname");
    expect(script.getAttribute("theme")).toBe("github-dark");
    expect(script.getAttribute("label")).toBe("comments");
    expect(script.getAttribute("crossorigin")).toBe("anonymous");
    expect(script.async).toBe(true);
  });

  it("커스텀 props가 올바르게 적용된다", () => {
    render(
      <Utterances issueTerm="title" theme="github-light" label="blog-comments" />,
    );

    const scriptCall = appendChildSpy.mock.calls.find(
      ([node]: [Node]) =>
        node instanceof HTMLScriptElement &&
        node.src.includes("utteranc.es/client.js"),
    );

    expect(scriptCall).toBeDefined();
    const script = scriptCall![0] as HTMLScriptElement;

    expect(script.getAttribute("issue-term")).toBe("title");
    expect(script.getAttribute("theme")).toBe("github-light");
    expect(script.getAttribute("label")).toBe("blog-comments");
  });

  it("언마운트 시 스크립트가 정리된다", () => {
    const { unmount } = render(<Utterances />);
    unmount();

    const container = document.querySelector("[data-testid]");
    expect(container?.children.length ?? 0).toBe(0);
  });
});
