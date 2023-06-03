export function Column({ name, children, length }: { name: string; children: React.ReactNode; length: number }) {
	return (
		<section className='w-80  flex-shrink-0 flex-grow-0'>
			<header className='flex items-center gap-2 my-5 '>
				<div className='h-4 w-4 f bg-teal-100 rounded-full' />
				<h3 className='dark:text-gray-400 uppercase'>
					{name} ({length})
				</h3>
			</header>
			<div className='flex gap-4 flex-col'>{children}</div>
		</section>
	);
}
