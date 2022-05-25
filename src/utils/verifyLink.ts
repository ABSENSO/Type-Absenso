export const verifyLink = (link: string) => {
    const withoutSpace = link.split(" ").join("");

    return withoutSpace.replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/]/gi,
      ""
    ).toLowerCase();
  };