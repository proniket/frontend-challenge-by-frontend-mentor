/* eslint-disable react/prop-types */

const SocialIcons = ({ icon }) => {
	return (
		<div className='w-10 h-10 border-2 border-white rounded-full flex justify-center items-center hover:text-soft-magentagrayish-blue'>
			{icon}
		</div>
	);
};

export default SocialIcons;
