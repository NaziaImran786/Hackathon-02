import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Label } from "@radix-ui/react-label"


export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
        <div className="w-full px-[15px] lg:px-[40px]  mx-auto h-[286px] bg-[#F6F5FF] ">
        {/* Banner content can be added here */}

        <div className="w-[314px] pl-6  pt-[106px]">
          <h1 className="text-[36px] leading-[42px] font-['Josefin_Sans'] text-[#101750] text-center mb-2">
            Hekto WishList
          </h1>          
        </div>
      </div>
     
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-[#101750] mb-6">Hekto Demo</h1>
        <h5 className="text-lg font-semibold text-[#101750] mb-6">Cart/ Information/ Shipping/ Payment</h5>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#F8F8FD] p-8 rounded-md">
              <div className="mb-12">
                <h2 className="text-lg font-semibold text-[#1D3178] mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email or mobile phone number</Label>
                    <Input id="email" className="mt-2" />
                  </div>
                  <div className="flex items-start gap-2">
                    
                    <Label htmlFor="updates" className="text-sm text-gray-500">
                      Keep me up to date on news and exclusive offers
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#1D3178] mb-6">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First name (optional)</Label>
                    <Input id="firstName" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" className="mt-2" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" className="mt-2" />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input id="apartment" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" defaultValue="Bangladesh" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" className="mt-2" />
                  </div>
                </div>
                <Button className="mt-8 bg-[#FB2E86] hover:bg-[#FB2E86]/90">Continue Shipping</Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={item} className="flex gap-4 pb-6 border-b">
                  <Image
                    src={`/demo/demo${index + 1}.png`}
                    alt="Product image"
                    width={83}
                    height={87}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-medium mb-2">Ut diam consequat</h3>
                    <p className="text-sm text-gray-500 mb-1">
                      Color: <span className="text-gray-600">Brown</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Size: <span className="text-gray-600">XL</span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[#15245E]">$32.00</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F4F4FC] p-6 rounded-md">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold text-[#1D3178]">Subtotals:</span>
                <span className="text-[#15245E]">$219.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-lg font-semibold text-[#1D3178]">Totals:</span>
                <span className="text-[#15245E]">$325.00</span>
              </div>
              <div className="flex items-start gap-2 mb-4">
                {/* <DropdownMenuCheckboxItem id="terms" /> */}
                <Label htmlFor="terms" className="text-sm text-gray-500">
                  Shipping & taxes calculated at checkout
                </Label>
              </div>
              <Button className="w-full bg-[#19D16F] hover:bg-[#19D16F]/90">
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

