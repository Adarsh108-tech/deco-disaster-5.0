import { Dialogue } from '@/app/components/Dialogue';
import dialogueData from '@/app/dialogues/L2.json';

export default function MyScenePage() {
  return (
    <Dialogue
      background="/assets/background2.jpg"
      leftCharacterImage="/assets/charac1.png"
      rightCharacterImage="/assets/charac2.png"
      leftDialogueImage="/assets/cloud2.png"
      rightDialogueImage="/assets/cloud1.png"
      dialogues={dialogueData.stage1}
      nextRoute="/level2/Stage1/Stage1-2"
    />
  );
}
