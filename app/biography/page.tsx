import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Biography"
};

export default function BiographyPage() {
  return (
    <div className="page-stack">
      <PageHeading
        eyebrow="Biography"
        title={site.name}
        intro="A bilingual author note."
      />

      <article className="bio-grid">
        <section lang="zh-CN" aria-labelledby="bio-zh">
          <h2 id="bio-zh">中文</h2>
          <p>
            刘素洁（Sujie LIU）写作小说、散文、诗、书信与旅行札记。她的文字关注记忆中的房间、
            迁徙之后的语言、梦境留下的细节，以及人与地方之间缓慢而隐秘的回声。
          </p>
          <p>
            这个网站作为一个安静的个人档案存在：它收录正在形成的作品、未完成的片段、阅读笔记、
            梦的记录与图像材料。完成的文本与尚未完成的文本并置，像一张仍在展开的书桌。
          </p>
        </section>

        <section aria-labelledby="bio-en">
          <h2 id="bio-en">English</h2>
          <p>
            Sujie LIU writes fiction, essays, poems, letters, and travel notes.
            Her work attends to remembered rooms, language after movement, the
            residues of dreams, and the quiet echoes between people and places.
          </p>
          <p>
            This website is a quiet personal archive for finished and unfinished
            work: fragments, reading notes, dream records, images, and texts in
            progress are kept together like papers on an open desk.
          </p>
        </section>
      </article>
    </div>
  );
}
