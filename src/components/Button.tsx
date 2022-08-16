type Props = {
  children: string;
  size?: "small" | "medium" | "large";
  btnType?: "primary" | "secondary" | "danger" | "link";
   
   
};

export function Button({ children, size='medium',btnType = 'primary', ...props }: Props) {
 
  let style: any = {
    fontsize: "1.5rem",
    border: "1px solid #ccc",
    padding: "0.5rem 1rem",
    backgroundColor: "#fff",
  };

  if (size === "small") {
    style.fontsize = "1.2rem";
  }

  if (size === "large") {
    style.fontsize = "2rem";
  }

  if (btnType === "link") {
    style.cursor = "pointer";
  }

  if (btnType === "danger") {
    style.color = "red";
  }

  if (btnType === "secondary") {
    style.color = "green";
  }

  if (btnType === "primary") {
    style.color = "blue";
  }


  return (
    <button className="button" style={style} {...props}>
      {children}
    </button>
  );
}
