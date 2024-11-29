import {
  RegExpMatcher,
  englishDataset,
  englishRecommendedTransformers,
} from 'obscenity';

export const cleanTopic = (topic: string) => {
  console.log('cleanTopic', topic)

  const trimmed = topic.trim()
  const matcherEn = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });

  if (matcherEn.hasMatch(topic)) {
    console.log('The input text contains profanities.');
  } else {

    return trimmed
  }



}
