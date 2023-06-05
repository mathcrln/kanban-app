'use client';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function AddTaskDialog({ isOpen }: { isOpen: boolean }): JSX.Element {
	const cancelButtonRef = useRef(null);
	const [isOpened, setIsOpen] = useState(false);
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
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
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
							<Dialog.Panel className='relative my-auto h-40 w-full transform overflow-hidden rounded-lg text-left shadow-xl transition-all dark:bg-gray-800 sm:my-8 md:h-full md:w-10/12 lg:w-8/12'>
								Hello World!
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
