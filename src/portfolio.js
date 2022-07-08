const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'ap.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Patel Archi',
  role: 'Front End developer',
  description:
    'I did my Diploma in Information Technology from Gujrat Technological University currently I am currently purusing Enginnering.',
  resume: 'a',
  social: {
    linkedin: 'a',
    github: 'https://github.com',

  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1--Profile Serchbar',
    description:
      'I make github profile serch page using api provided by github.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Archi023/ReactSearchbar.git',
    livePreview: '',
  },
  {

    name: 'Project 2--Gameplaying',
    description:
      'I make  button game  using react in which you have to press any of  three buttons if total goes  above 10 you win or you loss',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Archi023/game_react.git',
    livePreview: '',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'JAVA',
  'NodeJS',
  'Git',
  'Bootstraps',
  'PHP',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'archipatel65161@gmail.com',
}

export { header, about, projects, skills, contact }
