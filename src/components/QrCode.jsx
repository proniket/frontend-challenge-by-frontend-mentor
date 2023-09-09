const QrCode = () => {
	return (
		<div className='w-full min-h-screen bg-light-gray flex justify-center items-center'>
			<div className='w-[90%] max-w-sm bg-white rounded-lg p-5'>
				<div>
					<img
						src='/images/image-qr-code.png'
						alt='QRcode scanner'
						className='rounded-lg'
					/>
				</div>
				<div className='mt-6'>
					<h2 className='text-center text-2xl text-black font-bold'>Improve your frontend skills by building projects</h2>
					<p className='mt-4 text-center text-grayish-blue text-xl font-normal'>
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
};

export default QrCode;
