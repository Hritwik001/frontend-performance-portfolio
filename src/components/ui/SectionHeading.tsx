import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

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
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <Reveal className={`max-w-3xl ${alignment}`}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <Heading className="mt-4">
        <TextReveal text={title} />
      </Heading>

      <Text className="mt-6">{description}</Text>
    </Reveal>
  );
}
