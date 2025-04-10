import Link from 'next/link'
import { notFound } from 'next/navigation'

// Projects data
const projects = [
  {
    id: 'lifu-hyperthermia',
    title: 'Low Intensity Focused Ultrasound for Prostate Cancer',
    description: 'Non-invasive localized mild hyperthermia treatment using focused ultrasound.',
    detailedDescription: 'A device to deliver localized heat to prostate tissue for cancer treatment, offering a non-invasive alternative to surgery and radiation with minimal side effects.',
    technologies: ['Ultrasound', 'Medical Devices', 'Thermal Modeling'],
    status: 'In Progress',
    keyPoints: [
      'Prostate cancer is the 2nd leading cause of cancer death in men',
      'Mild hyperthermia weakens cancer cells and enhances immune response',
      'Focused ultrasound enables precise targeting of deep tissue',
      'Device designed for outpatient treatment potential',
      'Testing with anatomically accurate tissue models'
    ]
  },
  {
    id: 'nonlinear-dynamics',
    title: 'Sparse Identification of Nonlinear Delayed Dynamics',
    description: 'Extending SINDy framework to identify time-delay terms in machine turning processes.',
    detailedDescription: 'A data-driven approach to identify governing equations in turning processes by incorporating time-delay effects essential for capturing regenerative cutting phenomena.',
    technologies: ['System Identification', 'Nonlinear Dynamics', 'Feature Engineering'],
    status: 'In Progress',
    keyPoints: [
      'Standard system identification techniques fail with turning processes due to time-delay',
      'Custom libraries incorporating delay terms and modulated cutting coefficients',
      'Systematic delay and frequency identification through parameter sweeping',
      'Two-model approach separating acceleration and force dynamics',
      'High prediction accuracy for cutting force dynamics'
    ]
  },
  {
    id: 'humanoid-robot',
    title: 'Bipedal Humanoid Robot',
    description: 'Design and control of an agile humanoid with high-torque density motors for household assistance.',
    detailedDescription: 'A bipedal humanoid robot with novel quasi-direct-drive actuation for high bandwidth, high torque, and backdrivability without torque sensors.',
    technologies: ['Robotics', 'Quasi-Direct Drive', 'Mechanical Design', 'Reinforcement Learning'],
    status: 'Completed',
    githubUrl: 'https://github.com/will-d-chen/IsaacGym-RL-Humanoid',
    keyPoints: [
      'Used novel quasi-direct-drive actuation without torque sensors',
      'Implemented belt-driven transmission to reduce distal limb mass',
      'Created modular design with separate arm, torso, and leg components',
      'Designed for low-cost, off-the-shelf components while maintaining high performance',
      'Applied reinforcement learning control strategies'
    ],
    presented: 'Chen, D., Dan, M., Zhang, S., Dominguez, I., Shetty, V., Gao, W., Taylor, T.H., Ranjan, S., and Su, H. "Design and Control of an Open-Source Agile Bipedal Humanoid Robot with High-Torque Density Motors for Household Assistance." Presented at International Symposium on Medical Robotics (ISMR), 2023.'
  },
  {
    id: 'ur3e-control',
    title: 'ROS2 Control Package for UR3E',
    description: 'ROS2 package to control UR3e robot arms in joint space and task space using MoveIt2.',
    detailedDescription: 'A comprehensive ROS2 package for controlling Universal Robots UR3e robot arms in both joint space and task space using MoveIt2. Compatible with any URe series robot arm.',
    technologies: ['ROS2', 'MoveIt2', 'Robot Control', 'Python'],
    status: 'Completed',
    githubUrl: 'https://github.com/will-d-chen/ur3e-codebase',
    keyPoints: [
      'Integration with ROS2 and MoveIt2',
      'Dual control modes: joint space and task space',
      'Support for all URe series robots (UR3e, UR5e, UR10e, UR16e)',
      'Trajectory planning and collision avoidance',
      'Comprehensive tutorials and documentation'
    ],
  },
  {
    id: 'compliant-end-effector',
    title: 'Compliant End-Effector for Robotic Ultrasound',
    description: 'Quasi direct drive end-effector for safe patient interaction during robotic imaging.',
    detailedDescription: 'A novel end-effector design that improves patient safety and compliance during robotic ultrasound procedures through mechanical compliance and precise force control.',
    technologies: ['Robotics', 'Human-Robot Interaction', 'Mechanical Design'],
    status: 'In Progress',
    keyPoints: [
      'Designed for safe human-robot interaction during medical imaging',
      'Balanced compliance for safety with stiffness for imaging quality',
      'Integrated with ROS 2 control system',
      'Validated through experimental testing',
      'Paper submitted to ICRA 2025'
    ],
    publication: 'Chen, D., et al. "Design and Evaluation of a Compliant Quasi Direct Drive End-effector for Safe Robotic Ultrasound Imaging." Submitted to IEEE ICRA, 2025.'
  },
  {
    id: 'peripheral-bioreactor',
    title: 'Ex Vivo Peripheral Simulating Bioreactor',
    description: 'System to simulate in-vivo cardiovascular conditions for peripheral artery research.',
    detailedDescription: 'A bioreactor system that simulates cardiovascular and biomechanical conditions of peripheral arteries for testing endovascular devices without animal models.',
    technologies: ['Biomedical Engineering', 'Fluid Dynamics', 'Control Systems'],
    status: 'Completed',
    keyPoints: [
      'Alternative to in-vivo animal testing for endovascular devices',
      'Replicates physiological flow conditions',
      'Validated through pharmacokinetic studies of drug-eluting stents',
      'Published in Bioengineering & Translational Medicine',
      'System adopted for ongoing research applications'
    ],
    publication: 'Chen, D., et al. "Design and use of an ex vivo peripheral simulating bioreactor system for pharmacokinetic analysis of a drug coated stent." Bioengineering & Translational Medicine, 2024.'
  }
]

// Static path generation for optimal performance
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="inline-flex items-center mb-8 text-amber-300 hover:underline">
        ← Projects
      </Link>
      
      <div className="card">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-amber-200">{project.title}</h1>
          <span className={`text-sm px-2.5 py-1 rounded-xl ${
            project.status === 'In Progress' 
              ? 'bg-blue-900/40 text-blue-200' 
              : project.status === 'Completed'
              ? 'bg-green-900/40 text-green-200'
              : 'bg-amber-900/40 text-amber-200'
          }`}>
            {project.status}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-amber-900/40 text-amber-200 rounded-xl text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-amber-100/90 mb-6">{project.detailedDescription}</p>
          
          <ul className="text-amber-100/80 list-disc pl-5 space-y-2 mb-6">
            {project.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          {project.publication && (
            <div className="mt-6 p-4 bg-amber-900/20 rounded-xl">
              <h3 className="text-lg text-amber-200 mb-2">Related Publication</h3>
              <p className="text-amber-100/90 text-sm">
                {project.publication}
              </p>
            </div>
          )}
        </div>

        {project.githubUrl && (
          <div className="flex justify-start mt-8">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-xl bg-amber-900/40 text-amber-200 hover:bg-amber-900/60 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  )
}