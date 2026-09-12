"use client";

export default function FooterBlock({
  description,
  copyright,
}: {
  description?: string;
  copyright?: string;
}) {
  return (
    <footer className="bg-text-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-montserrat font-bold">THaiCraftworkZ</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
          <div>
            <h4 className="font-montserrat font-bold mb-4">สินค้า</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/products?cat=play" className="hover:text-white transition-colors">THZ Play</a></li>
              <li><a href="/products?cat=bench" className="hover:text-white transition-colors">THZ Bench</a></li>
              <li><a href="/products?cat=furniture" className="hover:text-white transition-colors">THZ Furniture</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-bold mb-4">ติดต่อเรา</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>081-300-1932</li>
              <li>THZ@gmail.com</li>
              <li>44 หมู่ 1 ถนนเทวบุรี ต.โพธิ์เสด็จ อ.เมือง จ.นครศรีธรรมราช 80000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>{copyright || "สงวนลิขสิทธิ์"} © {new Date().getFullYear()} THaiCraftworkZ (THZ)</p>
        </div>
      </div>
    </footer>
  );
}
