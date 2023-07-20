import Image from "next/image";
import item from '../../../public/item.jpg';

export const Items = () => {
  return (
    <div className="flex flex-wrap justify-between mb-24">
      <div className="w-[45%] sm:w-full sm:mb-2.5">
        <Image src={item} alt='item image' className="object-cover" />
      </div>
      <div className="w-[45%] text-xs sm:w-full sm:mx-4">
        <h2 className="text-base font-bold py-4 border-y my-auto mb-5">TOTALLY Short Sleeve Shirt</h2>
        <p className="mb-7 leading-5">テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト</p>
        <p className="mb-7">￥9,999 +tax</p>
        <table className="w-full text-center mb-5">
          <thead>
            <tr>
              <th className="w-[20%] font-light p-2.5 border-r">Color</th>
              <th className="w-[20%] font-light p-2.5 border-r">Size</th>
              <th className="w-[60%] font-light p-2.5 last:border-none"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[20%] font-light p-2.5 border-r border-t">White</td>
              <td className="w-[20%] font-light p-2.5 border-r border-t">S</td>
              <td className="w-[60%] font-light p-2.5 last:border-r-0 border-t">
                <select className="w-full px-2.5 bg-white border">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-[20%] font-light p-2.5 border-r border-t">White</td>
              <td className="w-[20%] font-light p-2.5 border-r border-t">M</td>
              <td className="w-[60%] font-light p-2.5 last:border-r-0 border-t">
                <select className="w-full px-2.5 bg-white border">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-[20%] font-light p-2.5 border-r border-t">White</td>
              <td className="w-[20%] font-light p-2.5 border-r border-t">L</td>
              <td className="w-[60%] font-light p-2.5 last:border-r-0 border-t">
                <select className="w-full px-2.5 bg-white border">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type='button' className="block bg-[#4B4B4B] text-white w-full py-4 mb-7">ADD TO CART</button>
        <table className="w-full text-center">
          <thead>
            <tr className="bg-[#ecebeb]">
              <th className="w-[15%] font-light p-2.5 border border-[#c3c3c3]">Size</th>
              <th className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">Chest</th>
              <th className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">Weist</th>
              <th className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-[#ecebeb] w-[15%] font-light p-2.5 border border-[#c3c3c3]">S</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
            </tr>
            <tr>
              <td className="bg-[#ecebeb] w-[15%] font-light p-2.5 border border-[#c3c3c3]">M</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
            </tr>
            <tr>
              <td className="bg-[#ecebeb] w-[15%] font-light p-2.5 border border-[#c3c3c3]">L</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
              <td className="w-[25%] font-light p-2.5 border border-[#c3c3c3]">99 ～ 99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}