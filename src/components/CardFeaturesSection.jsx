import CardFeature from './CardFeature';
// import karmaIcon from '/images/icon-karma.svg'
// import KarmaIcon from '../assets/images/icon-karma.svg';

const CardFeaturesSection = () => {
	return (
		<div className='w-full min-h-screen bg-Very-Light-Gray flex flex-col items-center gap-20 py-24'>
			<div className='w-10/12 sm:max-w-md text-center basis-1/4'>
				<h1 className='text-3xl text-Grayish-Blue'>
					Reliable, efficient delivery
				</h1>
				<h1 className='text-3xl font-semibold'>
					Powered by Technology
				</h1>
				<p className='text-Grayish-Blue mt-4'>
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</div>

			<div className='w-full max-w-[80rem] flex flex-col md:flex-row items-center  gap-8 md:gap-0 '>
				<div className='flex justify-center basis-2/6'>
					<CardFeature
						title='Supervisor'
						desc='Monitors activity to identify project roadblocks'
						topBarColor='Cyan'
						src='/images/icon-supervisor.svg'
						alt='supervisor icon'
					/>
				</div>

				<div className='flex flex-col items-center basis-2/6'>
					<CardFeature
						title='Team Builder'
						desc='Scans our talent network to create the optimal team for your project'
						topBarColor='Red'
						src='/images/icon-team-builder.svg'
						alt='team builder icon'
					/>
					<CardFeature
						title='Karma'
						desc='Regularly evaluates our talent to ensure quality'
						topBarColor='Orange'
						src='/images/icon-karma.svg'
						alt='karma icon'
					/>
				</div>
				<div className='flex justify-center basis-2/6'>
					<CardFeature
						title='Calculator'
						desc='Uses data from past projects to provide better delivery estimates'
						topBarColor='Blue'
						src='/images/icon-calculator.svg'
						alt='calculator icon'
					/>
				</div>
			</div>
		</div>
	);
};

export default CardFeaturesSection;
