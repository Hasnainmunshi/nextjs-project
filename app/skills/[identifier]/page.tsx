import { notFound } from "next/navigation";
import { getSkills } from "../SKILLS";

export default async function SkillsDetailsPage({
  params,
}: {
  params: Promise<{ identifier: string }>;
}) {
  const { identifier } = await params;

  const skills = await getSkills();

  const skill = skills.find((skill) => skill.id === identifier);

  if (!skill) {
    return notFound();
  }

  return (
    <article className="max-w-md mx-auto p-4 flex flex-col gap-4">
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <p>{skill.category}</p>
      <p>{skill.createAt}</p>
      <p>{skill.updateAt}</p>
    </article>
  );
}
