import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const SingleProduct = () => {
    const params = useParams()
    const [loading, error, data] =
     useFetch(`https://dummyjson.com/products/${params.id}`)

    if (loading) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    if (error) {
        return <div className=' flex justify-center h-[80vh] items-center text-3xl font-bold'>
            <h1 className='text-red-300'>Error occured</h1>
        </div>
    }
    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Product Image */}
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
  <div className="card card-side bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_20px_35px_rgba(0,0,0,0.4)]">
    <img
      src={data.thumbnail}
      alt={data.title}
      className="w-72 h-96 object-cover border-r-2 rounded-l-3xl"
    />
    <div className="card-body p-6">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{data.title}</h2>
      <div className="card-actions justify-end">
    
      </div>
    </div>
  </div>
</div>

                {/* Product Details */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold text-white">
                        {data.title}
                    </h1>
                    {/* Price and Discount */}
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-green-500">${data.price}</span>
                        <span className="text-sm text-red-600 line-through">${(data.price / (100 - data.discountPercentage) * 100).toFixed(2)}</span> 
                        <span className="text-sm text-green-600">-{data.discountPercentage}% Off</span>
                    </div>
                    {/* Rating and Reviews */}
                    <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-white">{data.rating} ({data.reviews.length} Reviews)</span>
                    </div>
                    {/* Description */}
                    <p className=" text-sm">
                        {data.description}
                    </p>
                    {/* Availability */}
                    <div className="text-sm ">
                        <p>
                            <strong>Availability:</strong> {data.availabilityStatus} ({data.stock} left)
                        </p>
                        <p>
                            <strong>Minimum Order Quantity:</strong> 24
                        </p>
                    </div>
                    {/* Shipping Information */}
                    <p className="text-sm">
                        <strong>Shipping:</strong> Ships in 1 month
                    </p>
                    {/* Warranty */}
                    <p className="text-sm ">
                        <strong>Warranty:</strong> {data.warrantyInformation}
                    </p>
                    {/* Return Policy */}
                    <p className="text-sm ">
                        <strong>Return Policy:</strong> {data.returnPolicy}
                    </p>
                    {/* Barcode & QR Code */}
                    <div className="space-y-2">
                        <img
                            src="https://assets.dummyjson.com/public/qr-code.png"
                            alt="QR Code"
                            className="w-20 h-20 border rounded-md"
                        />
                        <p className="text-sm">
                            <strong>Barcode:</strong> {data.sku}
                        </p>
                    </div>
                    {/* Add to Cart Button */}
                    <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
