export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  status: string;
  keyPoints: string[];
  githubUrl?: string;
  presented?: string;
  publication?: string;
  articleUrl?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  publications?: {
    text: string;
    articleUrl?: string;
    pdfUrl?: string;
    pdfLabel?: string;
  }[];
  mainImage?: string;
  images?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  youtubeVideos?: {
    id: string;
    title: string;
  }[];
}

export const projects: Project[] = [
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
    detailedDescription: 'I worked on this project during my time at NC state as a PhD student. Humanoid robots have the potential to be beneficial in various assistive scenarios because of their ability to navigate human-designed community environments. However, their current prohibitive costs present a significant barrier to most researchers. Our main goal was to create an affordable humanoid robot that combined advanced features with cost-effectiveness. To achieve this, we used quasi-direct-drive actuators (72 Nm peak torque) and incorporated 18 degrees of freedom into our design. Using deep reinforcement learning, we trained the robot to walk and run in a massive parallel simulation environment based on the open-source architecture originally developed by the RSL lab from ETH Zurich. We machined the components and assembled a fully operational leg for testing. To conclude the project, I presented our work on a poster at the International Symposium on Medical Robotics in Atlanta. ',
    technologies: ['Robotics', 'Quasi-Direct Drive', 'Mechanical Design', 'Reinforcement Learning'],
    status: 'Completed',
    githubUrl: 'https://github.com/will-d-chen/IsaacGym-RL-Humanoid',
    keyPoints: [],
    publication: 'Chen, D., Dan, M., Zhang, S., Dominguez, I., Shetty, V., Gao, W., Taylor, T.H., Ranjan, S., and Su, H. "Design and Control of an Open-Source Agile Bipedal Humanoid Robot with High-Torque Density Motors for Household Assistance." Presented at International Symposium on Medical Robotics (ISMR), 2023.',
    pdfUrl: '/2023_ISMR_Design%20and%20Control%20of%20an%20Open-Source%20Agile%20Bipedal%20Humanoid%20Robot%20with%20High-Torque%20Density%20Motors%20for%20Household%20Assistance.pdf',
    pdfLabel: 'Poster',
    images: [
      {
        src: '/images/projects/humanoid-robot/main.jpg',
        alt: 'Design Render',
        caption: 'Humanoid CAD Design Render'
      },
      {
        src: '/images/projects/humanoid-robot/render.png',
        alt: 'Design Render',
        caption: 'Design Schematic'
      },
      {
        src: '/images/projects/humanoid-robot/poster.jpg',
        alt: 'Poster',
        caption: 'Research Poster presented at ISMR 2023'
      }
    ]
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
    status: 'Completed',
    keyPoints: [
      'Designed for safe human-robot interaction during medical imaging',
      'Balanced compliance for safety with stiffness for imaging quality',
      'Integrated with ROS 2 control system',
      'Validated through experimental testing',
      'Published in IEEE Transactions on Medical Robotics and Bionics (2026)'
    ],
    publication: 'Chen, Danyi, et al. "Design and Evaluation of a Compliant Quasi-Direct Drive End-Effector for Safe Robotic Ultrasound Imaging." IEEE Transactions on Medical Robotics and Bionics (2026).',
    articleUrl: 'http://dx.doi.org/10.1109/TMRB.2026.3699216',
    pdfUrl: '/Design_of_a_Compliant_Quasi_Direct_drive_End_Effector_for_Robotic_Ultrasound_Imaging.pdf'
  },
  {
    id: 'peripheral-bioreactor',
    title: 'Ex Vivo Peripheral Simulating Bioreactor',
    description: 'System to simulate in-vivo cardiovascular conditions for peripheral artery research.',
    detailedDescription: 'As an undergraduate, I conducted two years of research at the Wake Forest Biofluids lab, where my primary focus was the development of an in-vitro peripheral simulating bioreactor. The preclinical evaluation of endovascular devices for peripheral artery disease is mostly limited to expensive and time-consuming in vivo studies.  The reason being a lack of clinically relevant ex vivo models capable of testing the pharmacokinetic performance in a biologically relevant model of the periphery. To address this, I designed the first benchtop ex vivo system that can accurately replicate the complex mechanical stresses and physiological flow conditions that arteries experience in the periphery, enabling the intermediate evaluation of endovascular intervention devices such as stents and balloons without the need to jump to in vivo animal experiments. We validated our system on state-of-the-art Zilver drug-eluting stents in harvested porcine arteries and found our pharmacokinetic results comparable to existing in vivo results. As the first author, we published a journal paper about this research in Bioengineering and Translational Medicine. Succeeding researchers expanded on the experimentation and published additional work in Cardiovascular Engineering and Technology.',
    technologies: ['Biomedical Engineering', 'Fluid Dynamics', 'Minimally Invasive Procedures'],
    status: 'Completed',
    keyPoints: [],
    publications: [
      {
        text: 'D. Chen, C. Krinsky, M. Phillips, C. Allred, A. Khan, L. B. Liu, U. Christians, and S. K. Yazdani, "Design and use of an ex vivo peripheral simulating bioreactor system for pharmacokinetic analysis of a drug coated stent," Bioengineering & Translational Medicine, vol. 9, no. 2, p. e10618, 2024.',
        articleUrl: 'https://aiche.onlinelibrary.wiley.com/doi/full/10.1002/btm2.10618',
        pdfUrl: 'https://aiche.onlinelibrary.wiley.com/doi/pdf/10.1002/btm2.10618'
      },
      {
        text: 'T. Ursillo, K. Lowry, C. Allred, M. Phillips, L. B. Liu, D. Chen, and S. K. Yazdani, "The Impact of Peripheral Vascular Motion on Acute Drug Retention of Intravascular Devices," Cardiovascular Engineering and Technology, vol. 16, pp. 322–332, 2025.',
        articleUrl: 'https://link.springer.com/article/10.1007/s13239-025-00776-z'
      }
    ],
    images: [
      {
        src: '/images/projects/peripheral-bioreactor/main.jpg',
        alt: 'Bioreactor in Incubator',
        caption: 'Mechanical and Flow Loop Schematic of the Bioreactor'
      },
      {
        src: '/images/projects/peripheral-bioreactor/schematic.png',
        alt: 'Bioreactor Schematic',
        caption: 'Mechanical and Flow Loop Schematic of the Bioreactor'
      },
      {
        src: '/images/projects/peripheral-bioreactor/experiment_setup.jpg',
        alt: 'SEM Image of a Stent Pre-Deployment',
        caption: 'Scanning Electron Microscope (SEM) image of the stent pre-deployment'
      },
      {
        src: '/images/projects/peripheral-bioreactor/bioreactor_system.jpg',
        alt: 'SEM Image of a Stent Post-Deployment',
        caption: 'SEM Image of a Stent Post-Deployment'
      },
      {
        src: '/images/projects/peripheral-bioreactor/deployed_stent.png',
        alt: 'Control Architecture',
        caption: 'Control system architecture regulating physiological pressure and flow'
      },
      {
        src: '/images/projects/peripheral-bioreactor/sem_pre_deployment.jpg',
        alt: 'Artery with Deployed Stent Inside',
        caption: 'Porcine artery with Zilver drug-eluting stent deployed inside'
      },
      {
        src: '/images/projects/peripheral-bioreactor/control_architecture.png',
        alt: 'Bioreactor Schematic',
        caption: 'Bioreactor Schematic'
      },
      {
        src: '/images/projects/peripheral-bioreactor/computer_electronics.jpg',
        alt: 'Computer and Electronics Setup',
        caption: 'Sensors, computer, and electronics control workstation'
      }
    ]
  },
  {
    id: 'hip-exoskeleton',
    title: 'Hip Exoskeleton Design',
    description: 'Lightweight and compliant portable hip exoskeleton that remains in kinematic alignment under high torque.',
    detailedDescription: 'Many state-of-the-art rigid portable hip exoskeletons will move out of alignment with the subject’s hip under high torque settings because they are typically secured only by a single belt at the waist. Additionally, most rigid hip exoskeletons are either non-adjustable or have limited range of motion for lateral adjustability, making them unsuitable for people on the far spectrums of body sizes. To bridge this gap, I designed a lightweight and compliant quasi-direct-drive hip exoskeleton that utilizes a novel wearable design that remains in kinematic alignment with the user’s body even under high torque. In addition, I designed a double sliding hinge mechanism that allows the exoskeleton to adjust up to 150 mm horizontally, which is the largest lateral ROM in portable rigid hip exoskeletons to my knowledge. In practice, the exoskeleton can fit subjects from 90lbs to 350lbs comfortably. We conducted pilot experiments to measure kinematic alignment and metabolic cost reduction comparing the proposed design to the state-of-the-art design. Results show an improvement in metabolic reduction and alignment during walking. After I departed the lab, the paper was completed and published in IEEE Transactions in Medical Robotics and Bionics, though my name was not included in the authorship.',
    technologies: ['Robotics', 'Exoskeletons', 'Mechanical Design', 'Wearable Devices', 'Human-Robot Interaction'],
    status: 'Completed',
    keyPoints: [],
    images: [
      {
        src: '/images/projects/hip-exoskeleton/main.png',
        alt: 'Wearable Configuration Comparison',
        caption: 'Wearable Configuration Comparison'
      },
      {
        src: '/images/projects/hip-exoskeleton/wearable_comparison.jpg',
        alt: 'Lightweight quasi-direct-drive hip exoskeleton worn by subject',
        caption: 'Lightweight quasi-direct-drive hip exoskeleton worn by subject'
      },
      {
        src: '/images/projects/hip-exoskeleton/exoskeleton_wear.png',
        alt: 'Free Body Diagram Analysis',
        caption: 'Kinematic Alignment and Free Body Diagram Analysis'
      },
      {
        src: '/images/projects/hip-exoskeleton/fbd_analysis.png',
        alt: 'Range of Motion on Different Subjects',
        caption: 'Range of Motion on Different Subjects'
      }
    ]
  },
  {
    id: 'autonomous-ocean-profiler',
    title: 'Autonomous Ocean Profiler',
    description: 'Autonomous epipelagic profiler for cost-effective oceanic research data collection.',
    detailedDescription: 'My capstone project at Wake Forest University was designing an autonomous epipelagic profiler. Ocean data collection imposes substantial financial and temporal constraints on researchers, especially those in the field of ocean biology. Our objective was to develop a cost-effective, autonomous, and expandable undersea profiling robot capable of independent data gathering. Throughout the design process, we iterated and actively engaged with stakeholders. My responsibilities included mechanical, electrical, and controller design. Our efforts culminated in the successful creation of a prototype, winning the engineering department\'s Award of Excellence for Prototyping. Lastly, we presented our research in a conference paper published at the IEEE Systems and Information Engineering Design Symposium.',
    technologies: ['Robotics', 'Mechanical Design', 'Electrical Design', 'Controller Design', 'Marine Engineering'],
    status: 'Completed',
    keyPoints: [],
    publication: 'D. Chen, D. Martinez, and T. H. Taylor, "Design of a Low-Cost Autonomous Epipelagic Profiling System for Oceanic Research," in 2022 Systems and Information Engineering Design Symposium (SIEDS), 2022, pp. 79–84.',
    articleUrl: 'https://ieeexplore.ieee.org/abstract/document/9799420',
    youtubeVideos: [
      {
        id: 'DfJhFxTZR9Y',
        title: 'Demonstration Video'
      },
      {
        id: 'ihaSucZACRg',
        title: 'Presentation at IEEE SIEDS 2022'
      }
    ]
  }
];
