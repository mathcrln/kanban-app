'use client';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function DeleteTaskDialog({ isOpen }: { isOpen: boolean }): JSX.Element {
	const cancelButtonRef = useRef(null);
	const [isOpened, setIsOpen] = useState(false);
	const boardName = 'Platform';
	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10 w-80' initialFocus={cancelButtonRef} onClose={() => setIsOpen(false)}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10  overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						>
							<Dialog.Panel className='bg-white py-10 px-8 relative my-auto h-40 w-20 transform overflow-hidden rounded-lg text-left shadow-xl transition-all dark:bg-gray-800 sm:my-8 md:h-full md:w-10/12 lg:w-[480px]'>
								<h2 className='mb-6 text-base-red text-xl font-semibold'>Delete this task?</h2>
								<p className='text-medium-gray'>
									Are you sure you want to delete the {`'${boardName}'`} task and its subtasks? This action
									cannot be reversed.
								</p>
								<div className='grid grid-cols-2 gap-3 mt-6'>
									<button className='py-2 px-4 bg-base-red text-white rounded-full'>Delete</button>
									<button className='py-2 px-4 font-semibold text-main-purple dark:bg-white  bg-main-purple bg-opacity-10  rounded-full'>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
