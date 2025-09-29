import React from 'react';
import { Calendar, MapPin, GraduationCap, Award, Code, Database, Wrench } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600">Product Marketing Leader with 15+ years of experience in technology</p>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-blue-600" />
            Highlights
          </h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Product Marketing Leader with 15+ years of experience developing and executing go-to-market strategies, 
              product positioning, and thought leadership programs for global technology companies. Blend of technical 
              expertise (Computer Science) and business acumen (MBA) with proven success bringing new products to market 
              across security, platform, and AI-driven innovations. Recognized for strategic thinking, executive presence, 
              and ability to simplify complex concepts into compelling messaging for diverse audiences. Skilled in 
              collaborating with executives, research groups, and cross-functional teams to drive market adoption, 
              expand brand influence, and deliver measurable business impact.
            </p>
          </div>
        </div>

        {/* Specializing In */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Specializing In</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Product Marketing', 'Content Orchestration', 'Product Management',
              'Cloud Computing', 'Enablement', 'Team Building',
              'Competitive Analysis', 'Category Definition', 'Security GTM', 'Strategy'
            ].map((skill, index) => (
              <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-md text-sm font-medium text-center">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
            Experience
          </h3>
          
          <div className="space-y-8">
            {/* Bitwarden */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Product Marketing Leader</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 2024 – May 2025
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Bitwarden</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Santa Barbara, CA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Advancing the leader in Secure Credential and Identity Management</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Defined the Ideal Customer Profile (ICP) and mapped buyer pain points through market analysis, 30+ customer interviews, and win/loss reviews across 100+ deals.</li>
                <li>• Scaled omnichannel content strategy using Contentful CMS—building reusable content modules and tailored messaging for CISOs, developers, and technical buyers.</li>
                <li>• Drove GTM execution by building a comprehensive content engine (briefs, datasheets, demos, whitepapers) that supported enterprise adoption and developer education across the buyer journey.</li>
                <li>• Accelerated research and content velocity by leveraging AI tools (ChatGPT, Perplexity) for competitive analysis, market trends, and high-impact content creation.</li>
                <li>• Enabled sales by identifying developer friction points and aligning campaigns, accelerating PoC timelines, and influencing the company's largest enterprise win ($150K ARR, 2M end users).</li>
                <li>• Designed and launched a targeted play for Managed Service Providers (MSPs), generating $2M+ in qualified pipeline.</li>
              </ul>
            </div>

            {/* Immuta */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Director, Product Marketing – Data Security</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Aug 2021 – Aug 2023
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Immuta</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Boston, MA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Propelling the leader in Data Access Management and Security</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Drove or influenced $10M+ ARR with consistent quarter-over-quarter MQL growth.</li>
                <li>• Instrumental in pivoting the company into the Data Security Platforms category with differentiated positioning and persona-based messaging.</li>
                <li>• Built a scalable Win-Loss program from the ground up, gathering insights from 50+ customers that influenced pricing, hiring, and feature prioritization.</li>
                <li>• Enhanced demo strategy with guided tours, boosting MQL conversion by 40% over free trial and accelerating buyer journey momentum.</li>
                <li>• Owned product launch strategy and execution, creating a repeatable launch cadence—successfully releasing 30+ features and 2 new products.</li>
              </ul>
            </div>

            {/* Postman */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Enterprise Product Marketing – API Platform</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 2021 – Aug 2021
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Postman</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  San Francisco, CA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Helping define an entirely new product category around API Platforms</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Key member of the team that built the sales-led motion for the enterprise segment of an API platform.</li>
                <li>• Led messaging and message testing with tier 1 analysts (Gartner) to validate and refine positioning in emerging categories.</li>
                <li>• Built a propensity-to-buy and upgrade model identifying existing users most likely to adopt new platform capabilities.</li>
                <li>• Established a formal and scalable customer advocacy program, bringing on flagship brands like Twitter and Paylocity.</li>
              </ul>
            </div>

            {/* Informatica */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Manager, Product Marketing – iPaaS, Hybrid Integration, and AI</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Jan 2019 – Nov 2020
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Informatica</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Redwood City, CA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Driving the message of the industry's leading iPaaS</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Lead Product Marketing for Informatica's industry-leading iPaaS with a focus on Cloud Application Integration, API Management and Security.</li>
                <li>• Drive overall marketing strategy, including positioning, launch planning and execution, sales training and enablement.</li>
                <li>• Position core platform differentiators such as CLAIRE AI engine.</li>
                <li>• Conceptually redesign the iPaaS free trial offering to drive higher volume and quality of leads.</li>
              </ul>
            </div>

            {/* Oracle */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Manager, Product Marketing – Emerging Technologies</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Sep 2017 – Dec 2018
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Oracle</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Redwood Shores, CA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Launch and GTM for Oracle's Blockchain Platform</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Lead global product marketing efforts for the Oracle Autonomous Blockchain Cloud Service.</li>
                <li>• Developed and executed global go-to-market launch plan on schedule and within budget.</li>
                <li>• Defined marketing plan with an overall goal to achieve $10M USD in pipeline in the first year of launch.</li>
                <li>• Created thought leadership and educational content as components to market awareness and demand generation programs.</li>
              </ul>
            </div>

            {/* Dimension Data */}
            <div className="border-l-4 border-indigo-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-lg font-semibold text-gray-900">Technical Product Marketing - Cloud Business Unit</h4>
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  April 2014 – April 2015
                </span>
              </div>
              <div className="flex items-center mb-3">
                <h5 className="font-medium text-gray-800">Dimension Data Technologies/ NTT</h5>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Santa Clara, CA
                </span>
              </div>
              <p className="text-sm text-gray-600 italic mb-3">Enhancing Dimension Data's cloud/IaaS value proposition</p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Drove Go-To-Market strategy focused on differentiating and positioning Dimension Data as an Enterprise Hybrid Cloud and Hybrid IT provider.</li>
                <li>• Created requirements and logic for Public and Private IaaS Total Cost of Ownership Tool (TCO).</li>
                <li>• Built demos for dimension data's Public, Private, and Hybrid Cloud offerings to present at various conferences.</li>
                <li>• Worked with industry analysts such as Gartner and Forrester leading up to listing in Magic Quadrant and Forrester Wave.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
            Education
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">MBA, Master of Science in Business Administration</h4>
              <p className="text-gray-600">California State University, Hayward • 2008</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">BS, Computer Science</h4>
              <p className="text-gray-600">California State University, Hayward • 2005</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Wrench className="w-5 h-5 mr-2 text-blue-600" />
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Code className="w-4 h-4 mr-2 text-green-600" />
                Tools
              </h4>
              <p className="text-sm text-gray-700">OpenAI, Perplexity, Contentful, SAP, MS Project, Tableau, Advanced Excel, Lovable, Bolt, Replit</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Database className="w-4 h-4 mr-2 text-blue-600" />
                Databases & Languages
              </h4>
              <p className="text-sm text-gray-700">SQL, Supabase, Java, C++, PHP</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Award className="w-4 h-4 mr-2 text-purple-600" />
                Methodologies
              </h4>
              <p className="text-sm text-gray-700">Pragmatic Marketing, Agile, TDD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}