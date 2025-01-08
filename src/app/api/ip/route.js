export async function GET(req, res) {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return new Response(
        JSON.stringify({
            data,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  }