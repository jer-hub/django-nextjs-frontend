"use client";

const url = "/api/login"

export default function Page() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target)
    const objectData = Object.fromEntries(formData)
    const jsonData = JSON.stringify(objectData)

    const response = await fetch(url, {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: jsonData
    })

    const rData = await response.json()
    if(response.ok){
        console.log(rData)
    }
    console.log("submitted");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" id="" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" id="" placeholder="Password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </main>
  );
}
