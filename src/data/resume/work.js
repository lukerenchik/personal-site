/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bosch XC',
    position: 'Engineering Intern',
    url: 'https://www.bosch.com/stories/car-software-electronics/',
    startDate: '2023-04-01',
    summary: 'XC (Short for Cross Computing) is the Adaptive Driver Assistance Features (ADAS) and Sensors Division of Bosch Mobility.',
    highlights: [
      'Built and managed internal data campigns for ADAS Features.',
      'Built Generation 6 radar demo vehicle, updated visualization suite.',
      'Department JIRA admin & developer.',
    ],
  },
  {
    name: 'Mathnasium of Royal Oak',
    position: 'Math Instructor',
    url: 'https://www.mathnasium.com/math-centers/royaloak',
    startDate: '2021-08-01',
    endDate: '2023-05-01',
    summary: 'Mathnasium is an individual instruction center designed at improving students abilities in mathematics, problem solving, and critial reasoning.',
    highlights: [
      'Worked with dozens of students from Kindergarten through High School, teaching concepts from Numerical Fluency to Calculus. Helped foster a positive envrionment and good outcomes for many students.',
    ],
  },
];

export default work;
