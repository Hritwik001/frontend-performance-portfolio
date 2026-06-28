import { Eyebrow } from "./typography/Eyebrow";
import { Heading } from "./typography/Heading";
import { Text } from "./typography/Text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <Heading className="mt-4">
        {title}
      </Heading>

      <Text className="mt-6">
        {description}
      </Text>
    </div>
  );
}
