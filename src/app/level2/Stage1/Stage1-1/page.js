import { Dialogue } from '@/components/ui/Dialogue';

export default function MyScenePage() {
  return (
    <Dialogue
    background="/assets/background2.jpg"
  leftCharacterImage="/assets/charac1.png"
  rightCharacterImage="/assets/charac2.png"
  leftDialogueImage="/assets/cloud2.png"
  rightDialogueImage="/assets/cloud1.png"
  dialogues={[
    { speaker: "left", text: "Hey! Welcome to our game. Hey! Welcome to our game." },
    { speaker: "right", text: "Glad to be here! What’s the mission?" },
    { speaker: "left", text: "We’re going to explore the jungle." },
    { speaker: "right", text: "Awesome. Let’s go!" },
    { speaker: "left", text: "Hey! Welcome to our game." },
    { speaker: "right", text: "Glad to be here! What’s the mission?" },
    { speaker: "left", text: "We’re going to explore the jungle." },
    { speaker: "right", text: "Awesome. Let’s go!" }
  ]}
  nextRoute="/level2/Stage1/Stage1-2"
/>
  );
}