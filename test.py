#@view(method="GET")
def ping_farm(windfarm_id: int):
    # ping_function
    pass

if __name__ == "__main__":
    import subprocess
    host = "google.pl"
    output = subprocess.Popen(f"ping -c1 {host}", shell=True, stdout=subprocess.PIPE)
    streamdata = output.communicate()[0]
    rc = output.returncode
    # rc == 0 success
    # rc == 1 no replay
    # rc == 2 unknown host
    print(rc)
    print(output)
