import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  PlusCircle, 
  Users, 
  TrendingUp, 
  Settings,
  ArrowUpRight
} from "lucide-react";

// Static Stats Data
const stats = [
  { label: "Total Products", value: "124", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Users", value: "1,240", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Monthly Revenue", value: "$12,450", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Overview</h1>
            <p className="text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <Link
            href="/admin/add-product"
            className="flex items-center gap-2 bg-black hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-black/5"
          >
            <PlusCircle size={18} />
            Add Product
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                  +12% <ArrowUpRight size={12} />
                </span>
              </div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Quick Actions / Recent Activity Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Recent Products</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                    <div>
                      <p className="font-semibold text-sm">Product Name {item}</p>
                      <p className="text-xs text-gray-400">Software • $49.00</p>
                    </div>
                  </div>
                  <Link href="/admin/products" className="text-blue-600 text-xs font-bold hover:underline">Edit</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <LayoutDashboard size={32} />
            </div>
            <h3 className="text-lg font-bold">Analytics Coming Soon</h3>
            <p className="text-gray-500 text-sm max-w-xs mt-2">
              We are currently processing your sales data to provide advanced insights.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}