const Card = ({ title, body }: { title: string; body: string }) => (
  <div style={{
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 18,
    background: "rgba(255,255,255,0.06)"
  }}>
    <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ opacity: 0.9, lineHeight: 1.4 }}>{body}</div>
  </div>
);

export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(1200px 600px at 20% 10%, #3b82f6 0%, rgba(59,130,246,0) 60%), radial-gradient(900px 500px at 80% 20%, #a855f7 0%, rgba(168,85,247,0) 55%), #0b1020",
      color: "white",
      padding: 28
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 14, opacity: 0.85 }}>ESIC University</div>
            <h1 style={{ margin: "6px 0 0", fontSize: 34, letterSpacing: -0.5 }}>
              OBH°Simulation RoleGame — <span style={{ color: "#60a5fa" }}>DIGINEX</span>
            </h1>
            <div style={{ marginTop: 8, opacity: 0.9 }}>
              People behave. Markets react. Strategy under uncertainty.
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/status" style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.10)",
              color: "white",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.16)"
            }}>Status</a>

            <a href="/docs" style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              background: "#22c55e",
              color: "#05210f",
              textDecoration: "none",
              fontWeight: 700
            }}>Docs</a>
          </div>
        </div>

        <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          <Card title="Round Loop" body="News → Decisions (24h) → Auto‑Run (Sun 23:59 Madrid) → Debrief." />
          <Card title="Focus Ladder" body="Locked until you submit. Strategy first. Noise later." />
          <Card title="NPC Market Pressure" body="Invisible competitors influence the market. Rankings show humans only." />
          <Card title="Currency" body="digit (d). Incorporation costs 6,000d. Initial budget: 10,000d per member." />
        </div>

        <div style={{ marginTop: 18, opacity: 0.85, fontSize: 13 }}>
          This is the MVP placeholder. Next step: login + teams + Phase 0 + Round 1 decisions.
        </div>
      </div>
    </main>
  );
}
