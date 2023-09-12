// import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

const CardFeature = ({ title, desc, topBarColor, src, alt }) => {
  return (
		<div className='w-10/12 sm:max-w-sm shadow-lg rounded-sm'>
			<div className={`w-full h-1 bg-${topBarColor}`} />
			<div className='p-5'>
				<h2 className='text-xl font-semibold mb-1'>{title}</h2>
				<p className='text-md text-Grayish-Blue'>
					{desc}
				</p>
				<div className='flex justify-end mt-4'>
					<img src={src} alt={alt} />
				</div>
			</div>
		</div>
  );
}

// CardFeature.propTypes = {
// 	// Define your prop types here
// 	title: PropTypes.string.isRequired,
// 	desc: PropTypes.number.isRequired, // Required prop
// 	topBarColor: PropTypes.number.isRequired,
//     icon: PropTypes.
// 	// ...
// };

export default CardFeature
