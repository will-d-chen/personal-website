import { FiCheck, FiMinus } from 'react-icons/fi';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">About Me</h1>

      <div className="card prose prose-invert max-w-none">

        <h2 className="text-2xl text-amber-200 mb-4">Education</h2>
        <div className="space-y-6 text-amber-100/90">
          <div>
            <h3 className="font-semibold text-lg text-amber-50">Duke University</h3>
            <p className="my-1 flex items-center justify-between max-w-md">
              <span>PhD in Mechanical Engineering</span>
              <FiMinus className="w-4 h-4 text-amber-200" title="Ongoing" />
            </p>
            <p className="my-1 flex items-center justify-between max-w-md">
              <span>MS in Mechanical Engineering</span>
              <FiCheck className="w-4 h-4 text-[#849483]" title="Completed" />
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-amber-50">Wake Forest University</h3>
            <p className="my-1 flex items-center justify-between max-w-md">
              <span>BS in Engineering</span>
              <FiCheck className="w-4 h-4 text-[#849483]" title="Completed" />
            </p>
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
              <li>Developed benchtop bioreactor to simulate peripheral artery blood-flow and motion</li>
              <li>Conducted drug-eluting stent pharmacokinetic experiments</li>
            </ul>
          </div>
        </div>

        <h2 id="publications" className="text-2xl text-amber-200 mt-8 mb-4">Publications</h2>
        <div className="space-y-3 text-amber-100/90">
          <div className="mb-4">
            <p className="mb-2">D. Chen, R. Prakash, V. Y. Wang, Z. Chen, S. Dias, D. M. Buckland, L. J. Bridgeman, S. R. Oca, and B. P. Mann, "Design and Evaluation of a Compliant Quasi-Direct Drive End-Effector for Safe Robotic Ultrasound Imaging," <span className="italic">IEEE Transactions on Medical Robotics and Bionics</span>, 2026.</p>
            <div className="flex flex-wrap gap-2">
              <a href="http://dx.doi.org/10.1109/TMRB.2026.3699216" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Access
              </a>
              <a href="/Design_of_a_Compliant_Quasi_Direct_drive_End_Effector_for_Robotic_Ultrasound_Imaging.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </a>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">O. Oladokun, K. K. Yamamoto, D. Chen, L. Triplett, S. Barter, C. Reid, T. J. Zachem, B. P. Mann, K. L. Jackson, and S. Zani, "Insufflatable Modular Abdominal Simulation Environment (MASE) for Surgical Training Simulation," <span className="italic">Surgical Innovation</span>, 2026, Art. no. 15533506261451391.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://journals.sagepub.com/doi/abs/10.1177/15533506261451391" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Access
              </a>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">T. Ursillo, K. Lowry, C. Allred, M. Phillips, L. B. Liu, D. Chen, and S. K. Yazdani, "The Impact of Peripheral Vascular Motion on Acute Drug Retention of Intravascular Devices," <span className="italic">Cardiovascular Engineering and Technology</span>, vol. 16, pp. 322–332, 2025.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://link.springer.com/article/10.1007/s13239-025-00776-z" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-[#849483]/20 text-[#D0E0CF] hover:bg-[#849483]/30 border border-[#849483]/40 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Access
              </a>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">D. Chen, C. Krinsky, M. Phillips, C. Allred, A. Khan, L. B. Liu, U. Christians, and S. K. Yazdani, "Design and use of an ex vivo peripheral simulating bioreactor system for pharmacokinetic analysis of a drug coated stent," <span className="italic">Bioengineering &amp; Translational Medicine</span>, vol. 9, no. 2, p. e10618, 2024.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://aiche.onlinelibrary.wiley.com/doi/full/10.1002/btm2.10618" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-[#849483]/20 text-[#D0E0CF] hover:bg-[#849483]/30 border border-[#849483]/40 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Access
              </a>
              <a href="https://aiche.onlinelibrary.wiley.com/doi/pdf/10.1002/btm2.10618" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                PDF
              </a>
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">D. Chen, D. Martinez, and T. H. Taylor, "Design of a Low-Cost Autonomous Epipelagic Profiling System for Oceanic Research," in <span className="italic">2022 Systems and Information Engineering Design Symposium (SIEDS)</span>, 2022, pp. 79–84.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://ieeexplore.ieee.org/abstract/document/9799420" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Access
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-2xl text-amber-200 mt-8 mb-4">Conference Presentations</h2>
        <div className="space-y-3 text-amber-100/90">
          <div className="mb-4">
            <p className="mb-2">D. Chari-Letts, K. K. Yamamoto, O. Oladokun, D. Chen, L. Triplett, L. Jackson, P. Codd, and S. Zani, "Development of Patient-specific and Dynamic ED Thoracotomy Model for Surgical Training," presented at <span className="italic">2025 ACS Surgeons and Engineers</span>, 2025.</p>
          </div>

          <div className="mb-4">
            <p className="mb-2">D. Chen, M. Dan, S. Zhang, I. Dominguez, V. Shetty, W. Gao, T. H. Taylor, S. Ranjan, and H. Su, "Design and Control of an Open-Source Agile Bipedal Humanoid Robot with High-Torque Density Motors for Household Assistance," presented at <span className="italic">International Symposium on Medical Robotics (ISMR)</span>, Georgia, USA, 2023.</p>
            <div className="flex flex-wrap gap-2">
              <a href="/2023_ISMR_Design%20and%20Control%20of%20an%20Open-Source%20Agile%20Bipedal%20Humanoid%20Robot%20with%20High-Torque%20Density%20Motors%20for%20Household%20Assistance.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition duration-200 hover:scale-105 shadow-sm">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Poster
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}