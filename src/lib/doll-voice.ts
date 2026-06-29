import type { DollVoiceLine } from "@/data/doll-config";

function stopAll() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
}

function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const langPrefix = lang.split("-")[0];
  return (
    voices.find((v) => v.lang.startsWith(langPrefix)) ??
    voices.find((v) => v.lang.startsWith("en")) ??
    voices[0]
  );
}

function speakWithBrowserVoice(text: string, lang = "en-IN"): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis) {
      reject(new Error("Speech not supported"));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.92;
    utterance.pitch = 1;

    const setVoice = () => {
      const voice = pickVoice(lang);
      if (voice) utterance.voice = voice;
    };

    setVoice();
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoice();
        window.speechSynthesis.onvoiceschanged = null;
      };
    }

    utterance.onend = () => resolve();
    utterance.onerror = () => reject(new Error("Speech failed"));
    window.speechSynthesis.speak(utterance);
  });
}

/** Doll always uses browser AI voice — real recordings are hero-only. */
export async function playDollVoiceLine(line: DollVoiceLine): Promise<"ai" | "failed"> {
  stopAll();

  try {
    await speakWithBrowserVoice(line.speech, "en-IN");
    return "ai";
  } catch {
    return "failed";
  }
}

export function stopDollVoice() {
  stopAll();
}
