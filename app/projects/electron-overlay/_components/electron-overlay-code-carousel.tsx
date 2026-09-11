"use client"
import ilCode from "../_code-snippets/il-postprocessing.txt"
import typesCode from "../_code-snippets/types.txt"
import uiCode from "../_code-snippets/ui-code.txt"
import unityCode from "../_code-snippets/unity-code.txt"

import { CodeCarousel } from "@/components/code-carousel"
import csharpFn from "highlight.js/lib/languages/csharp"
import typescriptFn from "highlight.js/lib/languages/typescript"

export function ElectronOverlayCodeCarousel() {
  return (
    <>
      <CodeCarousel
        className="print:hidden"
        snippets={[
          {
            text: typesCode,
            language: typescriptFn,
            languageName: "typescript",
          },
          {
            text: uiCode,
            language: typescriptFn,
            languageName: "typescript",
          },
          {
            text: unityCode,
            language: csharpFn,
            languageName: "csharp",
          },
          { text: ilCode, language: csharpFn, languageName: "csharp" },
        ]}
      />
      <p className="hidden print:block">
        These code snippets do not display well when printing. Please copy-paste them into a document and print that
        instead.
      </p>
    </>
  )
}
