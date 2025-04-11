export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">About Me</h1>
      
      <div className="card prose prose-invert max-w-none">
        <p className="text-amber-100/90">
          Current PhD student in Mechanical Engineering at Duke University with research focus on robotics, 
          medical devices, and machine learning.
        </p>
        
        <h2 className="text-2xl text-amber-200 mt-8 mb-4">Education</h2>
        <div className="space-y-4 text-amber-100/90">
          <div>
            <h3 className="font-semibold">Duke University</h3>
            <p>PhD in Mechanical Engineering</p>
          </div>
          
          <div>
            <h3 className="font-semibold">Wake Forest University</h3>
            <p>BS in Engineering, 2022</p>
          </div>
        </div>
        
        <h2 className="text-2xl text-amber-200 mt-8 mb-4">Research Experience</h2>
        <div className="space-y-6 text-amber-100/90">
          <div>
            <h3 className="font-semibold">Duke University</h3>
            <p className="italic mb-2">Research Advisor: Dr. Brian Mann</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designing focused ultrasound therapy systems</li>
              <li>Indentifying nonlinear dynamics</li>
              <li>Developing safe robotic ultrasound imaging</li>
              <li>Writing ROS 2 libraries for robot arm control</li>
              <li>Creating surgical training simulators</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">North Carolina State University</h3>
            <p className="italic mb-2">Research Advisor: Dr. Hao Su</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed exoskeletons and humanoid robot systems</li>
              <li>Applied reinforcement learning for bipedal locomotion</li>
              
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Wake Forest University</h3>
            <p className="italic mb-2">Research Advisor: Dr. Saami Yazdani</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Developed ex-vivo peripheral simulating bioreactor</li>
              <li>Conducted drug-eluting stent pharmacokinetic experiments</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl text-amber-200 mt-8 mb-4">Publications</h2>
        <div className="space-y-3 text-amber-100/90">
          <div>
            <p>Chen, D., Krinsky, C., Phillips, M., Allred, C., Khan, A., Liu, L.B., Christians, U., and Yazdani, S.K. "Design and use of an ex vivo peripheral simulating bioreactor system for pharmacokinetic analysis of a drug coated stent." Bioengineering & Translational Medicine 9, no. 2 (2024): e10618.</p>
          </div>
          
          <div>
            <p>Chen, D., Martinez, D., and Taylor, T.H. "Design of a Low-Cost Autonomous Epipelagic Profiling System for Oceanic Research." In 2022 Systems and Information Engineering Design Symposium (SIEDS), pp. 79-84. IEEE, 2022.</p>
          </div>
          <div>
            <p>Chen, D., Prakash, R., Chen, Z., Dias, S., Wang, V., Bridgeman, L., and Oca, S. "Design and Evaluation of a Compliant Quasi Direct Drive End-effector for Safe Robotic Ultrasound Imaging." arXiv preprint arXiv:2410.03086 (2024).</p>
          </div>
          
          <div>
            <p>Ursillo, T., Lowry, K., Allred, C., Phillips, M., Liu, L.B., Chen, D., and Yazdani, S.K. "The Impact of Peripheral Vascular Motion on Acute Drug Retention of Intravascular Devices." Cardiovascular Engineering and Technology, 1-11.</p>
          </div>
          
          <div>
            <p>Oladokun, O., Yamamoto, K., Chen, D., Triplett, L., Barter, S., Zheng, P., Ramirez-Martinez, M., Chari-Letts, D., Bang, J.J., Mann, B.P., Jackson, K.L., and Zani, S. "Development of a Reusable Low-Cost Modular Abdominal Simulation Environment for Minimally Invasive Surgical Training." Submitted to the Journal of Surgical Education.</p>
          </div>
          
          
        </div>
        
        <h2 className="text-2xl text-amber-200 mt-8 mb-4">Conference Presentations</h2>
        <div className="space-y-3 text-amber-100/90">
          <div>
            <p>Chari-Letts, D., Yamamoto, K., Oladokun, O., Chen, D., Triplett, L., Jackson, L., Codd, P., and Zani, S. "Development of Patient-specific and Dynamic ED Thoracotomy Model for Surgical Training." Presented at 2025 ACS Surgeons and Engineers.</p>
          </div>
          
          <div>
            <p>Chen, D., Dan, M., Zhang, S., Dominguez, I., Shetty, V., Gao, W., Taylor, T.H., Ranjan, S., and Su, H. "Design and Control of an Open-Source Agile Bipedal Humanoid Robot with High-Torque Density Motors for Household Assistance." Presented at International Symposium on Medical Robotics (ISMR), Georgia, USA, 2023.</p>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}