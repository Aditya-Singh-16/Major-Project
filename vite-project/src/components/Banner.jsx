import React from 'react'

function Banner() {
  return (
    <>
    <div className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 flex">
        <div className="w=Full md:w=1/2 mt-12 md:mt-32">
            <div className="space-y-12">
            <h1 className="text-4xl front-bold">Hello, welcome here to learn something(" ") 
                <spam className="text-pink-500">new everyday!!!</spam>
                </h1>
                <p>
                Welcome to Book Haven, your one-stop destination for a world of stories, knowledge, and 
                imagination. Discover a vast collection of books across all genres, from timeless classics to the 
                latest bestsellers. Whether you're a fiction lover, a self-help enthusiast, or a student seeking 
                academic resources, we have something for everyone. Enjoy seamless browsing, quick searches, and 
                easy checkout for a hassle-free book-buying experience. Start your reading journey today! 📚✨
                </p>
            </div>
        </div>
        <div classname="w=Full md:w=1/2">Right</div>
    </div>
    </>
  )
}

export default Banner