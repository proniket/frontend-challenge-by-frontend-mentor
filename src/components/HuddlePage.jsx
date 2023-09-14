import SocialIcons from './SocialIcons';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BiLogoTwitter } from 'react-icons/bi';

const HuddlePage = () => {
	return (
		<div className='w-full min-h-screen bg-bg-mobile md:bg-bg-desktop bg-no-repeat bg-vilot flex justify-center items-center p-4 md:p-8'>
			<div className='max-w-[90%] md:max-w-[65rem]'>
				<header className='mb-20'>
					<img
						className='w-36 md:w-48'
						src='images/logo.svg'
						alt='Huddle Logo'
					/>
				</header>
				<main className='flex flex-col gap-4 md:gap-8 mb-16 md:flex-row md:justify-center'>
					<div className='max-w-[55%] self-center'>
						<img src='images/tab.png' alt='tab' className='' />
					</div>
					<div className='flex flex-col gap-4 md:mt-8'>
						<h2 className='text-xl md:text-3xl lg:text-4xl font-semibold text-center md:text-start md:leading-snug lg:leading-relaxed'>
							Build The Community <br /> Your Fans Will Love
						</h2>
						<p className='text-sm md:text-lg text-[#F2F2F2] text-center md:text-start md:max-w-[29rem]'>
							Huddle re-imagines the way we build communities. You
							have a voice, but so does your audience. Create
							connections with your users as you engage in genuine
							discussion.
						</p>
						<button className='w-48 mx-auto text-black text-sm rounded-full py-2 mt-2'>
							Register
						</button>
					</div>
				</main>
				<footer className='flex gap-3 justify-center md:justify-end'>
					<SocialIcons icon={<FaFacebookF />} />
					<SocialIcons icon={<BiLogoTwitter />} />
					<SocialIcons icon={<FaInstagram />} />
				</footer>
			</div>
		</div>
	);
};

export default HuddlePage;