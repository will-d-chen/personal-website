import Link from 'next/link'

const projects = [
  {
    id: 'lifu-hyperthermia',
    title: 'Low Intensity Focused Ultrasound for Prostate Cancer',
    description: 'Non-invasive localized mild hyperthermia treatment using focused ultrasound.',
    technologies: ['Ultrasound', 'Medical Devices', 'Thermal Modeling'],
    status: 'In Progress'
  },
  {
    id: 'nonlinear-dynamics',
    title: 'Sparse Identification of Nonlinear Delayed Dynamics',
    description: 'Extending SINDy framework to identify time-delay terms in machine turning processes.',
    technologies: ['System Identification', 'Nonlinear Dynamics', 'Feature Engineering'],
    status: 'In Progress'
  },
  {
    id: 'compliant-end-effector',
    title: 'Compliant End-Effector for Robotic Ultrasound',
    description: 'Quasi direct drive end-effector for safe patient interaction during robotic imaging.',
    technologies: ['Robotics', 'Human-Robot Interaction', 'Mechanical Design'],
    status: 'In Progress'
  },
  {
    id: 'ur3e-control',
    title: 'ROS2 Control Package for UR3E',
    description: 'ROS2 package to control UR3e robot arms in joint space and task space using MoveIt2.',
    technologies: ['ROS2', 'MoveIt2', 'Robot Control'],
    status: 'Completed'
  },
  {
    id: 'humanoid-robot',
    title: 'Bipedal Humanoid Robot',
    description: 'Design and control of an agile humanoid with high-torque density motors for household assistance.',
    technologies: ['LeggedRobotics', 'Quasi-Direct Drive', 'Mechanical Design'],
    status: 'Completed'
  },
  
  
  {
    id: 'peripheral-bioreactor',
    title: 'Ex Vivo Peripheral Simulating Bioreactor',
    description: 'System to simulate in-vivo cardiovascular conditions for peripheral artery research.',
    technologies: ['Biomedical Engineering', 'Simulator', 'Non-invasive Procedures'],
    status: 'Completed'
  }
]

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-amber-200">{project.title}</h2>
                <span className={`text-xs px-2 py-1 rounded-xl ${
                  project.status === 'In Progress' 
                    ? 'bg-blue-900/40 text-blue-200' 
                    : project.status === 'Completed'
                    ? 'bg-green-900/40 text-green-200'
                    : 'bg-amber-900/40 text-amber-200'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-amber-100/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-amber-900/40 text-amber-200 text-xs rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/projects/${project.id}`} 
                className="text-amber-300 hover:underline"
              >
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}