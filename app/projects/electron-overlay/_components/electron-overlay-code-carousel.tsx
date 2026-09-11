"use client"
import typesCode from "../_code-snippets/types.txt"
import uiCode from "../_code-snippets/ui-code.txt"
import unityCode from "../_code-snippets/unity-code.txt"
import ilCode from "../_code-snippets/il-postprocessing.txt"

import { CodeCarousel } from "@/components/code-carousel"
import typescriptFn from "highlight.js/lib/languages/typescript"
import csharpFn from "highlight.js/lib/languages/csharp"

export function ElectronOverlayCodeCarousel() {
  return (
    <>
      <CodeCarousel
        className="print:hidden"
        snippets={[
          {
            text: typesCode,
            language: typescriptFn,
          },
          {
            text: uiCode,
            language: typescriptFn,
          },
          {
            text: unityCode,
            language: csharpFn,
          },
          { text: ilCode, language: csharpFn },
        ]}
      />
      <p className="hidden print:block">
        These code snippets do not display well when printing. Please copy-paste them into a document and print that
        instead.
      </p>
    </>
  )
}
