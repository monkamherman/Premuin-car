import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { TextAnimate } from '@/components/ui/text-animate';
// import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer:React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-car mr-2 text-blue-400"></i> PremiumDrive
            </h3>
            <p className="text-gray-400">
              Leader de la location de véhicules premium en France depuis 2010. 
              Service personnalisé et véhicules haut de gamme.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Accueil</a></li>
              <li><a href="#catalogue" className="text-gray-400 hover:text-white transition duration-300">Catalogue</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Location avec chauffeur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Location sans chauffeur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Événements spéciaux</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Transferts aéroport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Service VIP</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Conditions générales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">CGV</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PremiumDrive. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-cc-visa text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-cc-mastercard text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-cc-amex text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-cc-paypal text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center space-x-1 border-t border-t-foreground/40 bg-foreground/50 px-1 py-[3px] text-sm font-light">
        <span>Designed and developped by</span>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={'https://www.linkedin.com/in/hermanmoukam/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nowrap font-normal text-primary/70 duration-200 hover:text-primary/70 hover:underline"
              >
                Herman Moukam
              </Link>
            </TooltipTrigger>

            <TooltipContent className="relative border border-footer-foreground bg-footer px-6 py-2 text-xs text-footer-foreground">
              <p className="relative z-30 space-y-3 leading-4">
                <p className="flex flex-col gap-2">
                  <span className="w-fit bg-footer">
                    <TextAnimate animation="slideLeft" by="character">
                      Hello, I am Herman Moukam,
                    </TextAnimate>
                  </span>
                  <p className="">
                    <span className="bg-footer">
                      I am a passionate <b>full-stack web</b> developer,
                    </span>
                    <br />
                    <span className="bg-footer">
                      specializing in crafting efficient and tailored digital
                      solutions.
                    </span>
                    <br />
                    <span className="bg-footer">
                      An expert in transforming ideas into modern applications,
                    </span>
                    <br />
                    <span className="bg-footer">
                      I combine creativity with technical precision.
                    </span>
                    <br />
                    <span className="bg-footer">
                      Always seeking innovation, I am committed to tackling
                    </span>
                    <br />
                    <span className="bg-footer">
                      digital challenges with professionalism and efficiency.
                    </span>
                  </p>
                </p>

                <p className="flex items-center gap-10">
                  <p className="flex w-fit flex-col bg-footer leading-3">
                    <span>Do you want to</span>
                    <span>contact me ?</span>
                  </p>

                  {/* Contact Informations */}
                  <div className="leading-4">
                    <p className="w-fit bg-footer">
                      Linkedin:
                      <Link
                        to={'https://www.linkedin.com/in/hermanmoukam/'}
                        target="_blank"
                        className="text-nowrap font-medium text-primary/85 duration-200 hover:text-primary"
                      >
                        <TextAnimate animation="blurIn" className="ml-2 inline">
                          My LinkedIn profile
                        </TextAnimate>
                      </Link>
                    </p>

                    <p className="w-fit bg-footer">
                      Whatsapp:
                      <Link
                        to={
                          'https://wa.me/237658852731?text=bonjour%20Herman%20Moukam'
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-nowrap font-medium text-primary/85 duration-200 hover:text-primary"
                      >
                        <TextAnimate
                          animation="blurIn"
                          by="character"
                          className="ml-2 inline"
                        >
                          +237 658 852 731
                        </TextAnimate>
                      </Link>
                    </p>
                  </div>
                </p>
              </p>

              <FlickeringGrid
                className="absolute inset-0 z-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#2f22f2"
                maxOpacity={0.3}
                flickerChance={0.8}
                height={800}
                width={800}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
};

export default Footer;
