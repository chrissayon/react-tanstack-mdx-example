type ModuleType = typeof import('*.mdx');
const modules = import.meta.glob<ModuleType>('./*.mdx');

const documentsIndexList = Object.entries(modules).map(async ([, module]) => {
  return await module();
});

/**
 * Export all the documents and obtain the meta information
 *
 * The promise needs to be resolved in the importing component as top level awaits
 * isn't readily available in ALL browsers
 */
export const DocumentIndex = Promise.all(documentsIndexList);
