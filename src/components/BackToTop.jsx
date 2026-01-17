export default function BackToTop() {
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 bg-black text-white p-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </a>
  );
}
