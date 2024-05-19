import { Button } from "../Buttons/Button";

export interface ContentBlock {
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "list"
    | "p"
    | "button"
    | string;
  content: string;
  contentClass?: string;
  buttonUrl?: string | undefined;
  buttonClass?: string | undefined;
}

interface RichTextBlockProps {
  contentBlocks: ContentBlock[];
  className?: string;
}

const onChangeCallback = (buttonURL: string | undefined) => {
  if (buttonURL) window.location.href = buttonURL;
};

export function RichEditor({ contentBlocks, className }: RichTextBlockProps) {
  return (
    <div className={`container-lg ${className}`}>
      {contentBlocks.map((block, index) => {
        switch (block.type) {
          case "h1":
            return (
              <h1
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "h2":
            return (
              <h2
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "h3":
            return (
              <h3
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "h4":
            return (
              <h4
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "h5":
            return (
              <h5
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "h6":
            return (
              <h6
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "p":
            return (
              <p
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "list":
            return (
              <ul
                className={block.contentClass}
                key={index}
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );
          case "button":
            if (block.content && block.buttonUrl) {
              return (
                <Button
                  key={index}
                  onClick={() => onChangeCallback(block.buttonUrl)}
                  variant="primaryArrow"
                  className={block.buttonClass}
                >
                  {block.content}
                </Button>
              );
            }
            return null;
          default:
            return null;
        }
      })}
    </div>
  );
}
