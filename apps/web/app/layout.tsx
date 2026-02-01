export const metadata = {
  title: "OBH°Simulation RoleGame — DIGINEX",
  description: "People behave. Markets react. Strategy under uncertainty."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
