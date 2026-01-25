import { motion } from 'framer-motion';
import { 
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiSolidity, SiRuby, SiRubyonrails,
  SiReact, SiVuedotjs, SiNextdotjs, SiNestjs, SiExpress, SiDjango, SiFastapi,
  SiRedux, SiTensorflow, SiCapacitor, SiWebgl,
  SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiTypeorm, SiFirebase,
  SiDocker, SiNginx, SiRabbitmq, SiApachekafka, SiPrometheus, SiNewrelic,
  SiJest, SiCypress, SiGulp,
  SiTerraform, SiKubernetes, SiAmazon, SiArgo,
  SiGitlab, SiGithubactions,
  SiStreamlit
} from 'react-icons/si';
import { 
  FaDatabase, FaCode, FaTheaterMasks, FaCube, FaPaw,
  FaUsers, FaBriefcase, FaClipboardList, FaCheckCircle,
  FaDumbbell, FaBullseye, FaUserTie, FaBolt,
  FaBrain, FaHandshake, FaLightbulb, FaLink, FaTerminal,
  FaExchangeAlt, FaSatellite, FaTree, FaWater, FaEye,
  FaRocket, FaBuilding, FaCogs, FaChartBar, FaRuler,
  FaSyncAlt
} from 'react-icons/fa';

// Languages
const languages = {
  advanced: [
    { name: 'TypeScript', icon: SiTypescript, level: 'advanced' },
    { name: 'JavaScript', icon: SiJavascript, level: 'advanced' },
    { name: 'Ruby', icon: SiRuby, level: 'advanced' },
  ],
  intermediate: [
    { name: 'Python', icon: SiPython, level: 'intermediate' },
  ],
  familiar: [
    { name: 'C++', icon: SiCplusplus, level: 'familiar' },
    { name: 'Solidity', icon: SiSolidity, level: 'familiar' },
  ],
};

// Frameworks
const frameworks = {
  advanced: [
    { name: 'React', icon: SiReact, level: 'advanced' },
    { name: 'Next.js', icon: SiNextdotjs, level: 'advanced' },
    { name: 'NestJS', icon: SiNestjs, level: 'advanced' },
    { name: 'Express.js', icon: SiExpress, level: 'advanced' },
    { name: 'Vue', icon: SiVuedotjs, level: 'advanced' },
    { name: 'Redux', icon: SiRedux, level: 'advanced' },
    { name: 'Zustand', icon: FaPaw, level: 'advanced' },
    { name: 'Ruby on Rails', icon: SiRubyonrails, level: 'advanced' },
  ],
  intermediate: [
    { name: 'Django', icon: SiDjango, level: 'intermediate' },
    { name: 'FastAPI', icon: SiFastapi, level: 'intermediate' },
    { name: 'TensorFlow.js', icon: SiTensorflow, level: 'intermediate' },
    { name: 'Capacitor.js', icon: SiCapacitor, level: 'intermediate' },
    { name: 'WebGL', icon: SiWebgl, level: 'intermediate' },
  ],
  familiar: [
    { name: 'Streamlit', icon: SiStreamlit, level: 'familiar' },
  ],
};

// Skills organized by category
const skills = {
  databases: {
    advanced: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'TypeORM', icon: SiTypeorm },
      { name: 'IndexedDB', icon: FaDatabase },
    ],
    familiar: [
      { name: 'PineconeDB', icon: FaCube },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  tools: {
    advanced: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Gulp', icon: SiGulp },
      { name: 'WebSocket', icon: FaCode },
    ],
    intermediate: [
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'New Relic', icon: SiNewrelic },
    ],
  },
  testing: {
    advanced: [
      { name: 'Jest', icon: SiJest },
      { name: 'Playwright', icon: FaTheaterMasks },
    ],
    intermediate: [
      { name: 'Cypress', icon: SiCypress },
    ],
  },
  deployment: {
    advanced: [
      { name: 'AWS', icon: SiAmazon },
    ],
    intermediate: [
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'ArgoCD', icon: SiArgo },
      { name: 'GitLab CI/CD', icon: SiGitlab },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
  softSkills: [
    { name: 'Teamwork', icon: FaUsers },
    { name: 'Professionalism', icon: FaBriefcase },
    { name: 'Organisation', icon: FaClipboardList },
    { name: 'Rigorous Attitude', icon: FaCheckCircle },
    { name: 'Strong Under Pressure', icon: FaDumbbell },
    { name: 'Responsibility', icon: FaBullseye },
    { name: 'Leadership', icon: FaUserTie },
    { name: 'Active Management', icon: FaBolt },
  ],
  strengths: {
    research: [
      { name: 'Analytical Mind', icon: FaBrain },
      { name: 'Collaborative Ethic', icon: FaHandshake },
      { name: 'First-principles Solution-focused', icon: FaLightbulb },
    ],
    development: [
      { name: 'REST & GQL APIs', icon: FaLink },
      { name: 'CLI Apps', icon: FaTerminal },
      { name: 'ETL Pipelines', icon: FaExchangeAlt },
      { name: 'Event-driven Processes', icon: FaSatellite },
      { name: 'Trunk-based', icon: FaTree },
      { name: 'GitFlow', icon: FaWater },
      { name: 'Code Review', icon: FaEye },
    ],
    testing: [
      { name: 'Test-driven Development', icon: FaCheckCircle },
      { name: 'Contract Testing', icon: FaClipboardList },
    ],
    deployment: [
      { name: 'GitLab CD', icon: FaRocket },
    ],
    design: [
      { name: 'Domain-driven', icon: FaBuilding },
      { name: 'Microservices MVC', icon: FaCogs },
      { name: 'Data-driven', icon: FaChartBar },
    ],
    practices: [
      { name: 'Requirement Scoping', icon: FaRuler },
      { name: 'Agile Workflows', icon: FaSyncAlt },
    ],
  },
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-display font-semibold text-white mb-6"
        >
          About Myself
        </motion.h2>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            Hello I'm a software developer! I can help you build a product, feature or website.
            Look through some of my work and experience! If you like what you see and have a
            project you need coded, don't hesitate to contact me.
          </p>
          
          <div className="flex gap-4 mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
            >
              LET'S CONNECT
            </motion.a>
            <motion.a
              href="https://chatgpt.com/backend-api/estuary/content?id=file_00000000287871f5a18bf52ccb129938&ts=491400&p=fs&cid=1&sig=6fd134493047ec817d67c78055de323c71c5049d61eda43556dcaa3128743fc5&v=0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-primary-500/50 hover:border-primary-400 rounded-lg font-medium text-sm text-primary-400 transition-all duration-300"
            >
              Get my resume
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Languages */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6 h-96 flex flex-col"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Languages</h3>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Advanced</h4>
                <ul className="space-y-2">
                  {languages.advanced.map((lang) => {
                    const IconComponent = lang.icon;
                    return (
                      <li key={lang.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{lang.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Intermediate</h4>
                <ul className="space-y-2">
                  {languages.intermediate.map((lang) => {
                    const IconComponent = lang.icon;
                    return (
                      <li key={lang.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{lang.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Familiar</h4>
                <ul className="space-y-2">
                  {languages.familiar.map((lang) => {
                    const IconComponent = lang.icon;
                    return (
                      <li key={lang.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{lang.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6 h-96 flex flex-col"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Frameworks</h3>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Advanced</h4>
                <ul className="space-y-2">
                  {frameworks.advanced.map((framework) => {
                    const IconComponent = framework.icon;
                    return (
                      <li key={framework.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{framework.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Intermediate</h4>
                <ul className="space-y-2">
                  {frameworks.intermediate.map((framework) => {
                    const IconComponent = framework.icon;
                    return (
                      <li key={framework.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{framework.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Familiar</h4>
                <ul className="space-y-2">
                  {frameworks.familiar.map((framework) => {
                    const IconComponent = framework.icon;
                    return (
                      <li key={framework.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{framework.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6 h-96 flex flex-col"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Skills</h3>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {/* Databases */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Databases</h4>
                <ul className="space-y-2">
                  {[...skills.databases.advanced, ...skills.databases.familiar].map((db) => {
                    const IconComponent = db.icon;
                    return (
                      <li key={db.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{db.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Tools */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Tools</h4>
                <ul className="space-y-2">
                  {[...skills.tools.advanced, ...skills.tools.intermediate].map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <li key={tool.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{tool.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Testing */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Testing</h4>
                <ul className="space-y-2">
                  {[...skills.testing.advanced, ...skills.testing.intermediate].map((test) => {
                    const IconComponent = test.icon;
                    return (
                      <li key={test.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{test.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Deployment */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Deployment</h4>
                <ul className="space-y-2">
                  {[...skills.deployment.advanced, ...skills.deployment.intermediate].map((deploy) => {
                    const IconComponent = deploy.icon;
                    return (
                      <li key={deploy.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{deploy.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Soft Skills */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Soft Skills</h4>
                <ul className="space-y-2">
                  {skills.softSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <li key={skill.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              
              {/* Strengths */}
              <div>
                <h4 className="text-sm font-medium text-primary-400 mb-2">Strengths</h4>
                <ul className="space-y-2">
                  {[
                    ...skills.strengths.research,
                    ...skills.strengths.development,
                    ...skills.strengths.testing,
                    ...skills.strengths.deployment,
                    ...skills.strengths.design,
                    ...skills.strengths.practices,
                  ].map((strength) => {
                    const IconComponent = strength.icon;
                    return (
                      <li key={strength.name} className="text-gray-400 text-sm flex items-center gap-3">
                        <IconComponent className="text-primary-400 text-lg" />
                        <span>{strength.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

