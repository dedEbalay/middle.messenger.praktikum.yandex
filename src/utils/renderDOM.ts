export function render(query: string, block: any) {
    const root: HTMLElement = document.querySelector(query)!;

    root.appendChild(block.getContent());

        block.dispatchComponentDidMount();

    return root;
}
